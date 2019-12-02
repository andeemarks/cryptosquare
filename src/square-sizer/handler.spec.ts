import { fn } from "./handler";
import { APIGatewayEvent } from "aws-lambda";
const utils = require("aws-lambda-test-utils");
const event: APIGatewayEvent = utils.mockEventCreator.createAPIGatewayEvent();

const expect = require("chai").expect;

describe("square-sizer", () => {
  it("should gracefully handle empty input", () => {
    event.pathParameters.plaintext = null;
    fn(event, null, (error: Error, result: any) => {
      expect(error).to.be.null;
      expect(result.body).to.equal('{"size":""}');
    });
  });
  it("should return the size for the input length", () => {
    event.pathParameters.plaintext = "abcd";
    fn(event, null, (error: Error, result: any) => {
      expect(error).to.be.null;
      expect(result.body).to.equal('{"size":"2"}');
    });
  });
});
