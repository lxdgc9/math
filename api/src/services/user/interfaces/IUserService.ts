import {
  FindRequest,
  FindOneRequest,
  CreateRequest,
  UpdateRequest,
  DeleteRequest,
} from "../Request";
import {
  FindResponse,
  FindOneResponse,
  CreateResponse,
  UpdateResponse,
  DeleteResponse,
} from "../Response";

interface IUserService {
  find(req: FindRequest): Promise<FindResponse>;
  findOne(req: FindOneRequest): Promise<FindOneResponse>;
  create(req: CreateRequest): Promise<CreateResponse>;
  update(req: UpdateRequest): Promise<UpdateResponse>;
  delete(req: DeleteRequest): Promise<DeleteResponse>;
}

export default IUserService;
