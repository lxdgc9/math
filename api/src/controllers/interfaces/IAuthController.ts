interface IAuthController {
  me(req: any, res: any): Promise<void>;
  login(req: any, res: any): Promise<void>;
}

export default IAuthController;
