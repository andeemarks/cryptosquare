import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda";

export const fn: Handler = (
  event: APIGatewayEvent,
  _: Context,
  cb: Callback
) => {
  const plaintext = event.pathParameters.plaintext;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      text: plaintext.toLowerCase().replace(/\s/g,'')
    })
  };

  cb(null, response);
};
