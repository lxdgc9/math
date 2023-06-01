import bcrypt from "bcrypt";
import User from "../../models/User";
import IAuthService from "./interfaces/IAuthService";
import { MeRequest, LoginRequest } from "./Request";
import { MeResponse, LoginResponse } from "./Response";

class AuthService implements IAuthService {
  async me(req: MeRequest): Promise<MeResponse> {
    try {
      let user = await User.findById(req.id);
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async login(req: LoginRequest): Promise<LoginResponse> {
    try {
      let user = await User.findOne({ username: req.username });
      if (user) {
        // Compare password
        const isMatch = await bcrypt.compare(req.password, user.password);
        if (isMatch) {
          return user;
        } else {
          throw new Error();
        }
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default new AuthService();
