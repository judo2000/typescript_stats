import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsfFileReader';
import { MatchResult } from './MatchResult';

// 1.  Create an object that satisfies the 'DataReader interface'
const csvFileReader = new CsvFileReader('football.csv');

// 2. Create an instance of MatchREader and pass in something satiffying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// matchReader.matches

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
