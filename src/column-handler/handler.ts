import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";
import * as _ from "lodash";

let plaintextToColumns = (plaintext: string, columnCount: number): string[] => {
  if (columnCount == 1) {
    return [plaintext];
  }

  const charsByRemainder = _.map(plaintext.split(""), (element, position,) => { let foo = {} ; foo[(position % columnCount).toString()] = element ; return foo });
  const sortedCharsByRemainder = _.sortBy(charsByRemainder, (item) => {return Object.keys(item)[0]})
  const sortedChars = _.map(sortedCharsByRemainder, (item) => {return Object.values(item)[0]})

  const chunkedSortedChars = sortedChars.join("").match(/.{1,2}/g);

  if (chunkedSortedChars.length < columnCount) {
    chunkedSortedChars.push(" ")
  }
  
  return chunkedSortedChars;
};

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const result = plaintextToColumns(
    event.pathParameters.plaintext,
    new Number(event.pathParameters.columncount).valueOf()
  );
  const response = {
    statusCode: 200,
    body: JSON.stringify(result)
  };

  cb(null, response);
};
