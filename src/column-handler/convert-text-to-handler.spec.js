import { textToColumns } from "./convert-text-to-columns";

const expect = require("chai").expect;

describe("#textToColumns", () => {
  it("should return text in columns when exact fit", () => {
    expect(textToColumns("abcd", 2)).to.equal('["ac","bd"]');
  });

  it("should return the plaintext unchanged with a 1 columncount", () => {
    expect(textToColumns("abcdef", 1)).to.equal('["abcdef"]');
  });

  it("should add rows if the plaintext is too short", () => {
    expect(textToColumns("a", 2)).to.equal('["a"," "]');
  });

  it("should pad rows if the plaintext is too short", () => {
    expect(textToColumns("abcde", 3)).to.equal('["ad","be","c "]');
  });
});
