import { fn } from "./handler";

const expect = require("chai").expect;

describe("normalizer", () => {
  describe("fn", () => {
    it("should return Serverless boilerplate message", () => {
      fn(null, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.body).to.equal(
          '{"message":"normalizer","input":null}'
        );
      });
    });
  });
});
