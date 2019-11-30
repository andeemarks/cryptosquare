import { hello } from "./handler";

const expect = require("chai").expect;

describe("handler", () => {
  describe("hello", () => {
    it("should return Serverless boilerplate message", () => {
      hello(null, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result.body).to.equal(
          '{"message":"Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!","input":null}'
        );
      });
    });
  });
});
