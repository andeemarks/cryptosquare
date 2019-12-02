export const normalize = (plaintext: string) => {
  return plaintext.toLowerCase().replace(/\s/g, "");
};
