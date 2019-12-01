import { fn } from "./handler";
import { APIGatewayEvent } from "aws-lambda";
const utils = require("aws-lambda-test-utils");
const event: APIGatewayEvent = utils.mockEventCreator.createAPIGatewayEvent();

const expect = require("chai").expect;

describe("normalizer", () => {
  describe("fn", () => {
    it("should return Serverless boilerplate message", () => {
      event.pathParameters.plaintext = "abcde";

      fn(event, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.body).to.equal(
          '{"text":"abcde"}'
        );
      });
    });
  });
});
