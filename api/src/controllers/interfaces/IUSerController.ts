interface IUserController {
  find(req: any, res: any): Promise<void>;
  findOne(req: any, res: any): Promise<void>;
  create(req: any, res: any): Promise<void>;
  update(req: any, res: any): Promise<void>;
  delete(req: any, res: any): Promise<void>;
}

export default IUserController;
