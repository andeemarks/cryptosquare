import { fn } from "./handler";

const expect = require("chai").expect;

describe("handler", () => {
  describe("fn", () => {
    it("should return Serverless boilerplate message", () => {
      fn(null, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.body).to.equal(
          '{"message":"column-handler","input":null}'
        );
      });
    });
  });
});
