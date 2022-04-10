import fs from "fs"
import { OutputTarget } from "../Summary"

export class HtmlReports implements OutputTarget {
  print(report: string): void {
    const html = `
            <div>
                <h1> Analisys Output </h1>
                <div> ${report} </div>
            </div>
        `
    fs.writeFileSync("report.html", html)
  }
}
