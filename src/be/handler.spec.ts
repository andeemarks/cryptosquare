import { fn } from "./handler";
import { APIGatewayEvent } from "aws-lambda";
const utils = require("aws-lambda-test-utils");

const expect = require("chai").expect;

describe("backend", () => {
  describe("fn", () => {
    it("should return already normal text unchanged", () => {
      const event: APIGatewayEvent = utils.mockEventCreator.createAPIGatewayEvent();
      event.pathParameters.plaintext = "abcde";

      fn(event, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.equal('{"text":"abcde"}');
      });
    });
  });
});
