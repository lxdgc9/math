import bluebird from "bluebird";
import mongoose from "mongoose";
import logger from "../utils/logger";

mongoose.Promise = bluebird;

// Convert _id to id
mongoose.set("toJSON", {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted._id;
  },
});

const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url);
    logger.info("Connect to DB");
  } catch (err) {
    logger.error(`Connect to DB failed: ${err.message}`);
  }
};

export default connectDB;
