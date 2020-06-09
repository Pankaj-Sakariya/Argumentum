﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Xml;
using System.Xml.Serialization;
using CsvHelper;
using Utf8Json;
using Utf8Json.Formatters;
using Utf8Json.Resolvers;


namespace Mindmapper
{
    class Program
    {
        static void Main(string[] args)
        {
            var configs = GetConfig();

            foreach (var config in configs)
            {
                IEnumerable<Fallacy> fallacies;
                Console.WriteLine($"Loading csv fallacies from file {config.SourcePath}");
                using (var reader = new StreamReader(config.SourcePath))
                using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
                {
                    csv.Configuration.RegisterClassMap<FallacyClassMap>();
                    fallacies = csv.GetRecords<Fallacy>().SkipLast(1).ToList();
                }
                Console.WriteLine($"Loaded {fallacies.Count()} fallacies");


                Console.WriteLine($"Creating Freemind mind map {config.DestPath}");

                var toReturn = new FreemindMap();
                var nodesByPath = new Dictionary<string, Node>(fallacies.Count());
                foreach (var fallacy in fallacies)
                {
                    var localPath = fallacy.Path;
                    var fallacyNode = new Node();
                    fallacyNode.TEXT = config.TitleFunc(fallacy);
                    var link = config.LinkFunc(fallacy);
                    if (!string.IsNullOrEmpty(link))
                    {
                        fallacyNode.LINK = link;
                    }
                    var descDoc = new XmlDocument();
                    descDoc.LoadXml($"{config.DescFunc(fallacy)}");
                    fallacyNode.Richcontent.Html.Body.Elements.Add(descDoc.DocumentElement);
                    descDoc.LoadXml($"{config.ExampleFunc(fallacy)}");
                    fallacyNode.Richcontent.Html.Body.Elements.Add(descDoc.DocumentElement);
                    nodesByPath[localPath] = fallacyNode;

                    var lastDotIndex = localPath.LastIndexOf('.');
                    int familyNb;
                    if (lastDotIndex > -1)
                    {
                        familyNb = int.Parse(fallacy.Path[0].ToString(), CultureInfo.InvariantCulture);
                        var parentPath = localPath.Substring(0, lastDotIndex);
                        var parentNode = nodesByPath[parentPath];
                        parentNode.Nodes.Add(fallacyNode);
                    }
                    else
                    {
                        familyNb = int.Parse(localPath);
                        if (familyNb == 0)
                        {
                            fallacyNode.ID = "ID_706669011";
                            toReturn.Node = fallacyNode;

                        }
                        else
                        {
                            if (familyNb > 2)
                            {
                                fallacyNode.POSITION = "left";
                            }
                            toReturn.Node.Nodes.Add(fallacyNode);
                        }
                    }

                    if (fallacy.Depth < config.FontSizes.Count)
                    {
                        fallacyNode.Font = new Font() { Size = config.FontSizes[fallacy.Depth].ToString() };
                    }

                    if (fallacy.Depth < config.EdgeSizes.Count)
                    {
                        fallacyNode.Edge = new Edge() { WIDTH = config.EdgeSizes[fallacy.Depth].ToString(CultureInfo.InvariantCulture) };
                        if (familyNb > 0)
                        {
                            fallacyNode.Edge.COLOR = config.Colors[familyNb];
                            fallacyNode.BACKGROUND_COLOR = HLSColor.GetLighterColor(config.Colors[familyNb]);
                            //fallacyNode.COLOR = ColorTranslator.ToHtml(ColorTranslator.FromHtml(config.Colors[familyNb]).GetContrast(true));
                            //fallacyNode.Font.Color = ColorTranslator.ToHtml(Color.AliceBlue);
                        }
                        fallacyNode.STYLE = "bubble";
                    }
                    else
                    {
                        fallacyNode.STYLE = "fork";

                    }
                    if (fallacy.Depth <= config.EdgeSizes.Count)
                    {
                        fallacyNode.Font.BOLD = "true";
                    }
                    if (fallacy.Depth >= config.EdgeSizes.Count)
                    {
                        fallacyNode.COLOR = HLSColor.GetDarkerColor(config.Colors[familyNb]);
                    }
                }



                var serializer = new XmlSerializer(typeof(FreemindMap));


                using (var fs = File.Create(config.DestPath))
                {
                    XmlWriterSettings writerSettings = new XmlWriterSettings { Indent = true, OmitXmlDeclaration = true };
                    using (var writer = XmlTextWriter.Create(fs, writerSettings))
                    {
                        serializer.Serialize(writer, toReturn);
                    }
                }



                Console.WriteLine($"Mind map {config.DestPath} succesfully generated!");
                
            }
            Console.WriteLine($"Generation finished, press any key to close");
            Console.ReadKey();

        }

        static List<MindMapConfig> GetConfig()
        {

            var configFileName = Path.Combine(Environment.CurrentDirectory, "MindMapsConfig.json");
            CompositeResolver.RegisterAndSetAsDefault(new IJsonFormatter[] { new TimeSpanFormatter() }, new IJsonFormatterResolver[] { StandardResolver.Default });
            if (!File.Exists(configFileName))
            {
                var newConfig = new List<MindMapConfig>();
                newConfig.Add(new MindMapConfig());
                var enConfig = new MindMapConfig();
                enConfig.DestPath = enConfig.DestPath.Replace("Fr", "En");
                enConfig.DescriptionExpression = enConfig.DescriptionExpression.Replace("Fr", "En");
                enConfig.TitleExpression = enConfig.TitleExpression.Replace("Fr", "En");
                enConfig.ExampleExpression = enConfig.ExampleExpression.Replace("Fr", "En");
                enConfig.LinkExpression = enConfig.LinkExpression.Replace("Fr", "En");
                newConfig.Add(enConfig);
                var strNewConfig = JsonSerializer.PrettyPrint(JsonSerializer.ToJsonString(newConfig));
                File.WriteAllText(configFileName, strNewConfig);
            }

            using var configStream = File.OpenRead(configFileName);
            var config = JsonSerializer.Deserialize<List<MindMapConfig>>(configStream);
            return config;
        }

    }
}
