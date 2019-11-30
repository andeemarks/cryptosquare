import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  let size: string = "";
  const plaintext = event.pathParameters.plaintext;
  if (plaintext) {
    size = Math.round(Math.sqrt(plaintext.length) + 0.49).toString();
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      size: size
    })
  };

  cb(null, response);
};
