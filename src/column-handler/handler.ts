import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";
import * as _ from "lodash";

let plaintextToColumnsMR = (str, num) => {
  const arr = Array.from(str.padEnd(Math.ceil(str.length / num) * num, " "));
  const initial = Array.from({ length: num }, () => '');
  return arr.reduce((acc, char, i) => (acc[i % num] += char, acc), initial);
};

// let plaintextToColumnsAE = (text: string, cols: number) =>
// Array.from({ length: cols }, (_val, col) =>
//   text
//     .split('')
//     .filter((_char, index) => index % cols === col)
//     .join('')
//     .padEnd(Math.ceil(text.length / cols), ' ')
// );

// let plaintextToColumnsTS = (str, groupCount) => {
//   const cols = []
//   const letters = str.split('')
//   while (letters[0]) {
//       for (let i = 0; i < groupCount; i++) {
//           cols[i] = (cols[i] || '') + (letters.shift() || ' ');
//       }
//   }
//   return cols;
// }

// let plaintextToColumnsAM = (plaintext: string, columnCount: number): string[] => {
//   if (columnCount == 1) {
//     return [plaintext];
//   }

//   const charsByRemainder = _.map(plaintext.split(""), (element, position,) => { let foo = {} ; foo[(position % columnCount).toString()] = element ; return foo });
//   const sortedCharsByRemainder = _.sortBy(charsByRemainder, (item) => {return Object.keys(item)[0]})
//   const sortedChars = _.map(sortedCharsByRemainder, (item) => {return Object.values(item)[0]})

//   const chunkedSortedChars = sortedChars.join("").match(/.{1,2}/g);

//   if (chunkedSortedChars.length < columnCount) {
//     chunkedSortedChars.push(" ")
//   }

//   if (chunkedSortedChars[chunkedSortedChars.length - 1].length < chunkedSortedChars[0].length) {
//     chunkedSortedChars[chunkedSortedChars.length - 1] = _.pad(chunkedSortedChars[chunkedSortedChars.length - 1], chunkedSortedChars[0].length)
//   }

//   return chunkedSortedChars;
// };

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const result = plaintextToColumnsMR(
    event.pathParameters.plaintext,
    new Number(event.pathParameters.columncount).valueOf()
  );
  const response = {
    statusCode: 200,
    body: JSON.stringify(result)
  };

  cb(null, response);
};
