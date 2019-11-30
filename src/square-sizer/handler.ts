import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "square-sizer",
      input: event
    })
  };

  cb(null, response);
};
