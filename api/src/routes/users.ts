import express from "express";
import access from "../middlewares/access";
import userController from "../controllers/UserController";

const router = express.Router();

router
  .route("/")
  .get(access, userController.find)
  .post(access, userController.create);

router
  .route("/:id")
  .get(access, userController.findOne)
  .put(access, userController.update)
  .delete(access, userController.delete);

export default router;
