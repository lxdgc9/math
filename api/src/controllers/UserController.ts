import logger from "../utils/logger";
import userService from "../services/user";
import IUserController from "./interfaces/IUSerController";

class UserController implements IUserController {
  async find(req: any, res: any): Promise<void> {
    logger.debug("Find controller");

    try {
      const users = await userService.find({});
      res.json({ users });
    } catch (err) {
      logger.error(`Find controller: ${err.message}`);
      res.status(400).json({
        msg: "Tìm danh sách người dùng thất bại",
      });
    }
  }

  async findOne(req: any, res: any): Promise<void> {
    logger.debug("FindOne controller");

    try {
      const user = await userService.findOne({ id: req.params.id });
      if (user) {
        res.json({ user });
      } else {
        res.status(404).json({
          msg: "User not found",
        });
      }
    } catch (err) {
      logger.error(`FindOne controller: ${err.message}`);
      res.status(400).json({
        msg: "Tìm người dùng thất bại",
      });
    }
  }

  async create(req: any, res: any): Promise<void> {
    logger.debug("Create controller");

    try {
      const { username, password } = await req.body;
      const user = await userService.create({ username, password });
      if (user) {
        res.json({ user });
      } else {
        throw new Error();
      }
    } catch (err) {
      logger.error(`Create controller: ${err.message}`);
      res.status(400).json({
        msg: "Tạo người dùng thất bại",
      });
    }
  }

  async update(req: any, res: any): Promise<void> {
    logger.debug("Update controller");

    try {
      const user = await userService.update({
        id: req.params.id,
        body: req.body,
      });
      if (user) {
        res.json({ user });
      } else {
        throw new Error();
      }
    } catch (err) {
      logger.error(`Update controller: ${err.message}`);
      res.status(400).json({
        msg: "Cập nhật thất bại",
      });
    }
  }

  async delete(req: any, res: any): Promise<void> {
    logger.debug("Delete controller");

    try {
      const user = await userService.delete({ id: req.params.id });
      if (user) {
        res.json({ user });
      } else {
        throw new Error();
      }
    } catch (err) {
      logger.error(`Delete controller: ${err.message}`);
      res.status(400).json({
        msg: "Xoá người dùng thất bại",
      });
    }
  }
}

export default new UserController();
