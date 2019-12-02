export const squareSize = (plaintext: string) => {
  if (plaintext) {
    return Math.round(Math.sqrt(plaintext.length) + 0.49);
  }

  return null;
};
