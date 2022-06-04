import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // this is a type assertion which means
      // we are overriding typscript's default behavior
      // we are telling typescript that the item at
      // row[5] should be considered to be one of the
      // values from the enum
      row[5] as MatchResult,
      row[6],
    ];
  }
}
