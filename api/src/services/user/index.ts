import bcrypt from "bcrypt";
import User from "../../models/User";
import IUserService from "./interfaces/IUserService";
import {
  CreateRequest,
  DeleteRequest,
  FindOneRequest,
  FindRequest,
  UpdateRequest,
} from "./Request";
import {
  CreateResponse,
  DeleteResponse,
  FindOneResponse,
  FindResponse,
  UpdateResponse,
} from "./Response";

class UserService implements IUserService {
  async find(req: FindRequest): Promise<FindResponse> {
    try {
      let users = await User.find();
      return users;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findOne(req: FindOneRequest): Promise<FindOneResponse> {
    try {
      let user = await User.findById(req.id);
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async create(req: CreateRequest): Promise<CreateResponse> {
    try {
      let user = new User(req);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async update(req: UpdateRequest): Promise<UpdateResponse> {
    try {
      let user = await User.findByIdAndUpdate(req.id, req.body, { new: true });
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async delete(req: DeleteRequest): Promise<DeleteResponse> {
    try {
      let user = await User.findByIdAndDelete(req.id);
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default new UserService();
