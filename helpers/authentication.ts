import randomstring from "randomstring";
import Base64 from "crypto-js/enc-base64";
import SHA256 from "crypto-js/sha256";

const generateHash = (password: string, salt: string) =>
  SHA256(password + salt).toString(Base64);

export const generateAuthentication = (password: string) => {
  const token = randomstring.generate(64);
  const salt = randomstring.generate(64);
  const hash = generateHash(password, salt);
  const authenticationData = { token, salt, hash };
  return authenticationData;
};

export const checkPassword = (password: string, hash: string, salt: string) =>
  generateHash(password, salt) === hash;
