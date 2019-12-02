import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";
import { normalize } from "./normalize-plaintext";

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      text: normalize(event.pathParameters.plaintext)
    })
  };

  cb(null, response);
};
