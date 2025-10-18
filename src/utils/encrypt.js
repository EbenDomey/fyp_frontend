// import crypto from "crypto-js";
// import { AES, enc } from "crypto-js";
import JSEncrypt from "jsencrypt";

// const crypto = require("crypto-browserify");

// const plaintext = "Your payload to encrypt";

// export const encryptDataSymmetric = (body) => {
//   const key = crypto.randomBytes(32);
//   const iv = crypto.randomBytes(12);
//   const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

//   let encrypted = cipher.update(body, "utf8", "hex");
//   encrypted += cipher.final("hex");

//   const tag = cipher.getAuthTag();
//   const output = Buffer.from(
//     iv.toString("hex") + encrypted + tag.toString("hex"),
//     "hex"
//   ).toString("base64");
//   return output;
// };

export const encryptDataAsymmetric = (payload) => {
  var encrypt = new JSEncrypt();
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  encrypt.setPublicKey(publicKey);
  const serialzed = JSON.stringify(payload);
  const cipherText = encrypt.encrypt(serialzed);
  return cipherText;
};
