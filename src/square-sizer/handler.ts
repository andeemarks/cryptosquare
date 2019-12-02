import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";
import { squareSize } from "./get-matching-square";

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const size = squareSize(event.pathParameters.plaintext); 
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      size: (size || "").toString()
    })
  };

  cb(null, response);
};
