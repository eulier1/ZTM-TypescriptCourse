import { CSVFilereader } from "./CSVFilereader"
import { MatchResult } from "../MatchResult"
import { dateStringToDate } from "../utils"

type MatchData = [Date, string, string, number, number, MatchResult, string]

/* The way to read this line
// Given the class MatchReader that extends from CSVFilereader, 
// that has been customize to work with 
/*/
export class MatchReader extends CSVFilereader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ]
  }
}
