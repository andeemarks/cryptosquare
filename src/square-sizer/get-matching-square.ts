export const squareSize = (plaintext: string) => {
  let size: string = "";
  if (plaintext) {
    size = Math.round(Math.sqrt(plaintext.length) + 0.49).toString();
  }

  return size;
};
