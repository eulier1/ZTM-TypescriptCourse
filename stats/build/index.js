"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CSVFilereader_1 = require("./CSVFilereader");
var Summary_1 = require("./Summary");
// Create an obj that satisfies the DataReader interface
var csvFileReader = new CSVFilereader_1.CSVFilereader("football.csv");
// Create an instance of MatchReader and pass in something that
// satisfying the 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
//matchReader.loadFromStream()
// One approach to invoke it
// const winsAnalyzer = new WinsAnalysis("Man United")
// const consoleReport = new ConsoleReport()
// const htmlReport = new HtmlReports()
// const summary = new Summary(winsAnalyzer, htmlReport)
// summary.buildAndPrintReport(matches)
// 2nd approach to invoke it
// One of the bad things of this approach is that is not immidiate
// know if that is an instance of the class
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
