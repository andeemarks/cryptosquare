import { handler } from "./handler";

const expect = require("chai").expect;

describe("handler", () => {
  describe("handler", () => {
    it("should return Serverless boilerplate message", () => {
      handler(null, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.body).to.equal(
          '{"message":"column-handler","input":null}'
        );
      });
    });
  });
});
