const expect = require("chai").expect;

import { squareSize } from "./get-matching-square";

describe("#squareSize", () => {
  it("should gracefully handle empty input", () => {
    expect(squareSize(null)).to.be.null;
  });
  it("should return the size when the input length is an exact square", () => {
    expect(squareSize("abcd")).to.equal(2);
  });
  it("should return the size when the input length is not an exact square", () => {
    expect(squareSize("abcde")).to.equal(3);
  });
});
