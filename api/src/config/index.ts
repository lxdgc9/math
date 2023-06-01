import dotenv from "dotenv";
import fs from "fs";
import logger from "../utils/logger";

if (fs.existsSync(".env")) {
  logger.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  logger.debug(
    "Using .env.example file to supply config environment variables"
  );
  dotenv.config({ path: ".env.example" });
}

export const ACCESS_KEY = process.env.ACCESS_KEY;
export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV;
export const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/core";
export const SECRET_KEY = process.env.SECRET_KEY || "language-core";
