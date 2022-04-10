const fs = require("fs")
const parse = require("csv-parse")
// const { finished } = require("stream/promises")

export class CSVFilereader {
  data: string[][] = []
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
  }

  // TODO - implement #comment in csv with property type to handle as a Stream Daa
  // async readStream(): Promise<void> {
  //   const processFile = async () => {
  //     let records: any = []
  //     const parser = fs.createReadStream(`${__dirname}/fs_read.csv`).pipe(
  //       parse({
  //         // CSV options if any
  //       })
  //     )
  //     parser.on("readable", function () {
  //       let record
  //       while ((record = parser.read())) {
  //         // Work with each record
  //         records.push(record)
  //       }
  //     })
  //     await finished(parser)
  //     return records
  //   }

  //   ;(async () => {
  //     const records = await processFile()
  //     console.info(records)
  //   })()
  // }
}
