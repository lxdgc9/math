import logger from "../utils/logger";
import { ACCESS_KEY } from "../config";

async function access(req: any, res: any, next: any) {
  logger.debug("Access middleware");

  try {
    if (req.body.key === ACCESS_KEY) {
      next();
    } else {
      throw new Error("Key not found");
    }
  } catch (err) {
    logger.error(`Access middleware: ${err.message}`);
    res.status(403).json({
      msg: "Permission denied",
    });
  }
}

export default access;
