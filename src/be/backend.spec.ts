import { cryptosquare } from "./backend";

const expect = require("chai").expect;

describe("#normalize", () => {
  it("should return already normal text unchanged", () => {
    expect(cryptosquare("abcde")).to.be.equal("abcde");
  });

});
