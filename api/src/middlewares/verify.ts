import logger from "..//utils/logger";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";

async function verify(req: any, res: any, next: any) {
  logger.debug("Verify middleware");

  try {
    const token = req.header("Authorization").split("Bearer ")[1];
    req.user = jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    logger.error(`Verify middleware: ${err.message}`);
    res.status(401).json({
      msg: "Invalid token",
    });
  }
}

export default verify;
