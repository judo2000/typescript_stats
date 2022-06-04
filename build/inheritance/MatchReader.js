"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            // this is a type assertion which means
            // we are overriding typscript's default behavior
            // we are telling typescript that the item at
            // row[5] should be considered to be one of the
            // values from the enum
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
