"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFilereader = void 0;
var fs = require("fs");
var parse = require("csv-parse");
// const { finished } = require("stream/promises")
var CSVFilereader = /** @class */ (function () {
    function CSVFilereader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CSVFilereader.prototype.read = function () {
        this.data = fs
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) { return row.split(","); });
    };
    return CSVFilereader;
}());
exports.CSVFilereader = CSVFilereader;
