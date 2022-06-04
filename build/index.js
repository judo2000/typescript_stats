"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsfFileReader_1 = require("./CsfFileReader");
const MatchResult_1 = require("./MatchResult");
// 1.  Create an object that satisfies the 'DataReader interface'
const csvFileReader = new CsfFileReader_1.CsvFileReader('football.csv');
// 2. Create an instance of MatchREader and pass in something satiffying
// the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
