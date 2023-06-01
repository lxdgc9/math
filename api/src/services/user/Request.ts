import IUser from "../../models/entities/IUser";

type FindRequest = {};
type FindOneRequest = { id: string };
type CreateRequest = IUser;
type UpdateRequest = { id: string; body: IUser };
type DeleteRequest = { id: string };

export {
  FindRequest,
  FindOneRequest,
  CreateRequest,
  UpdateRequest,
  DeleteRequest,
};
