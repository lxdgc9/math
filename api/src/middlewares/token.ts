import Token from "../models/Token";
import logger from "../utils/logger";

async function handleLoginOnOneDevice(req: any, res: any, next: any) {
  logger.debug("Handle login on 1 device middleware");

  try {
    const token = req.header("Authorization").split("Bearer ")[1];
    const getToken = await Token.findOne({ user: req.user.id, token });
    if (!getToken) {
      throw new Error("Token model not found");
    }
    next();
  } catch (err) {
    logger.error(`Handle login on 1 device middleware: ${err.message}`);
    res.status(403).json({
      msg: "Permission denied",
    });
  }
}

export default handleLoginOnOneDevice;
