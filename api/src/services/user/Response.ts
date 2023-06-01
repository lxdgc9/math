import IUser from "../../models/entities/IUser";

type FindResponse = IUser[];
type FindOneResponse = IUser;
type CreateResponse = IUser;
type UpdateResponse = IUser;
type DeleteResponse = IUser;

export {
  FindResponse,
  FindOneResponse,
  CreateResponse,
  UpdateResponse,
  DeleteResponse,
};
