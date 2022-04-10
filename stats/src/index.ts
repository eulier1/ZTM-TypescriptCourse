import { MatchReader } from "./MatchReader"
import { CSVFilereader } from "./CSVFilereader"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { ConsoleReport } from "./reportsTarget/ConsoleReport"
import { HtmlReports } from "./reportsTarget/HtmlReport"
import { Summary } from "./Summary"

// Create an obj that satisfies the DataReader interface
const csvFileReader = new CSVFilereader("football.csv")
// Create an instance of MatchReader and pass in something that
// satisfying the 'DataReader' interface
const matchReader = MatchReader.fromCsv("football.csv")
matchReader.load()
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
const summary = Summary.winsAnalysisWithHtmlReport("Man United")

summary.buildAndPrintReport(matchReader.matches)
