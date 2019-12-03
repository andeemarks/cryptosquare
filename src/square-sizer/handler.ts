import { APIGatewayEvent, Context, Handler, Callback, SNSEvent } from "aws-lambda";
import { squareSize } from "./get-matching-square";

export const httpFn: Handler = (
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

export const snsFn: Handler = (
  event: SNSEvent,
  _: Context,
  cb: Callback
) => {
  console.log(event);

  cb(null, "bar");
};
