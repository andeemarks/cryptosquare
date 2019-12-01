import { fn } from "./handler";
import { APIGatewayEvent } from "aws-lambda";
const utils = require("aws-lambda-test-utils");
const event: APIGatewayEvent = utils.mockEventCreator.createAPIGatewayEvent();

const expect = require("chai").expect;

describe("handler", () => {
  describe("fn", () => {
    it("should return Serverless boilerplate message", () => {
      event.pathParameters.plaintext = "abcd";
      event.pathParameters.columncount = "2";
      fn(event, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.body).to.equal('["ac","bd"]');
      });
    });
    it("should return the plaintext unchanged with a 1 columncount", () => {
      event.pathParameters.plaintext = "abcdef";
      event.pathParameters.columncount = "1";
      fn(event, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.body).to.equal('["abcdef"]');
      });
    });
    it("should add rows if the plaintext is too short", () => {
      event.pathParameters.plaintext = "a";
      event.pathParameters.columncount = "2";
      fn(event, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.body).to.equal('["a"," "]');
      });
    });
  });
});
