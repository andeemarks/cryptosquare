import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";
import { cryptosquare } from "./backend";

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      text: cryptosquare(event.pathParameters.plaintext)
    })
  };

  cb(null, response);
};
