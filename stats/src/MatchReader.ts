import { MatchResult } from "./MatchResult"
import { dateStringToDate } from "./utils"
import { MatchData } from "./MatchData"
import { CSVFilereader } from "./CSVFilereader"

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CSVFilereader(filename))
  }

  matches: MatchData[] = []

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    })
  }

  // async loadFromStream(): Promise<void> {
  //   await this.reader.readStream()
  //   console.log(this.reader.data)
  //   this.matches = this.reader.data.map((row: string[]): MatchData => {
  //     return [
  //       dateStringToDate(row[0]),
  //       row[1],
  //       row[2],
  //       parseInt(row[3]),
  //       parseInt(row[4]),
  //       row[5] as MatchResult,
  //       row[6],
  //     ]
  //   })
  // }
}
