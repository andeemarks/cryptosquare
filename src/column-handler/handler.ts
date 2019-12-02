import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";
import { textToColumns } from "./convert-text-to-columns";

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const result = textToColumns(
    event.pathParameters.plaintext,
    new Number(event.pathParameters.columncount).valueOf()
  );
  const response = {
    statusCode: 200,
    body: JSON.stringify(result)
  };

  cb(null, response);
};
