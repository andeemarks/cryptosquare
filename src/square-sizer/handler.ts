import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";
import { squareSize } from "./get-matching-square";

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      size: squareSize(event.pathParameters.plaintext)
    })
  };

  cb(null, response);
};
