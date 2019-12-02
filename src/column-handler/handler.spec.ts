import { fn } from "./handler";
import { APIGatewayEvent } from "aws-lambda";
const utils = require("aws-lambda-test-utils");
const event: APIGatewayEvent = utils.mockEventCreator.createAPIGatewayEvent();

const expect = require("chai").expect;

describe("handler", () => {
  describe("#fn", () => {
    it("should operate on pathParameters", () => {
      event.pathParameters.plaintext = "abcd";
      event.pathParameters.columncount = "2";
      fn(event, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.equal('["ac","bd"]');
      });
    });
  });
});
