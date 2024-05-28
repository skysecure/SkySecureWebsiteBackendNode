require("dotenv").config();
// importing the database names
const databases = require("./databases");
const dataTypes = require("./datatypes");
const sequelize = require("./sequelize");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const make_hash = (text) => {
  var hash = crypto.createHash("md5").update(text).digest("hex");
  return hash;
};

const check_hash = (text, hash) => {
  var texthash = crypto.createHash("md5").update(text).digest("hex");
  return texthash == hash;
};
// importing from dot env files and exporting it
module.exports = {
  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DATABASE: process.env.DATABASE,
    DB_DRIVER: process.env.DB_DRIVER,
    DB_MULST: process.env.DB_MULST,
    JWT_SECRET: process.env.JWT_SECRET,
    ENVIRONMENT: process.env.ENVIRONMENT,
    LOCAL_URL: process.env.LOCAL_URL,
    LIVE_URL: process.env.LIVE_URL,
  },
  databases,
  dataTypes,
  sequelize,
  makeHash: make_hash,
  checkHash: check_hash,
  makeToken(data) {
    const token = jwt.sign(data, process.env.JWTSECRET, {
      expiresIn: "4h",
    });
    return token;
  },
  makeRefreshToken(data) {
    const token = jwt.sign(data, process.env.JWTSECRET, {
      expiresIn: "1y",
    });
    return token;
  },
  checkToken(token) {
    try {
      const verifier = jwt.verify(token, process.env.JWTSECRET);
      return verifier;
    } catch (error) {
      return "Session expired";
    }
  },
};
