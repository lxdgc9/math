import jwt from "jsonwebtoken";
import logger from "../utils/logger";
import authService from "../services/auth";
import IAuthController from "./interfaces/IAuthController";
import { SECRET_KEY } from "../config";
import Token from "../models/Token";

class AuthController implements IAuthController {
  async me(req: any, res: any): Promise<void> {
    logger.debug("Me controller");

    try {
      const user = await authService.me(req.user);
      res.json({ user });
    } catch (err) {
      logger.error(`Me controller: ${err.message}`);
      res.status(403).json({
        msg: "Sai token",
      });
    }
  }

  async login(req: any, res: any): Promise<void> {
    logger.debug("Login controller");

    try {
      const { username, password } = await req.body;
      const user = await authService.login({ username, password });
      if (user) {
        const payload = { id: (user as any).id };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });

        // Handle login on 1 device
        const _token = await Token.findOne({ user: (user as any).id });
        if (!_token) {
          const newToken = new Token({
            user: (user as any).id,
            token,
          });
          await newToken.save();
        } else {
          await Token.findOneAndUpdate({ user: (user as any).id }, { token });
        }

        res.json({
          accessToken: token,
          user,
        });
      } else {
        throw new Error("User not found");
      }
    } catch (err) {
      logger.error(`Login controller: ${err.message}`);
      res.status(403).json({
        msg: "Đăng nhập thất bại",
      });
    }
  }
}

export default new AuthController();
