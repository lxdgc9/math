import { MeRequest, LoginRequest } from "../Request";
import { MeResponse, LoginResponse } from "../Response";

interface IAuthService {
  me(req: MeRequest): Promise<MeResponse>;
  login(req: LoginRequest): Promise<LoginResponse>;
}

export default IAuthService;
