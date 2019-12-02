import { normalize } from "./normalize-plaintext";

const expect = require("chai").expect;

describe("#normalize", () => {
  it("should return already normal text unchanged", () => {
    expect(normalize("abcde")).to.be.equal("abcde");
  });

  it("should downcase all input text", () => {
    expect(normalize("aBeChE")).to.be.equal("abeche");
  });

  it("should remove all whitespace", () => {
    expect(normalize(" a  B cD  e")).to.be.equal("abcde");
  });
});
