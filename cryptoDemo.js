import crypto, { createDecipheriv } from "crypto";

// createHash()
const hash = crypto
  .createHash("sha256")
  .update("Hello, Node.js!")
  .digest("hex");
// console.log("SHA-256 Hash: ", hash);

// randomBytes()
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  // console.log(buf.toString('hex'))
});

//createChiperiv & createDecipheriv

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const chiper = crypto.createCipheriv(algorithm, key, iv);
let encrypted = chiper.update("Hello, this is secret massage", "utf-8", "hex");
encrypted += chiper.final("hex");
console.log(encrypted);

const dechiper = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = dechiper.update( encrypted, "hex", "utf8");
decrypted += dechiper.final("utf8");
console.log(decrypted);
