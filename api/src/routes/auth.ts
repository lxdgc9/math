import express from "express";
import verify from "../middlewares/verify";
import handleLoginOnOneDevice from "../middlewares/token";
import authController from "../controllers/AuthController";

const router = express.Router();

router.get("/me", verify, handleLoginOnOneDevice, authController.me);
router.post("/login", authController.login);

export default router;
