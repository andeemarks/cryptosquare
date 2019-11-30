import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";

export const handler: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "column-handler",
      input: event
    })
  };

  cb(null, response);
};
