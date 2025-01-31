import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const userRouter = express.Router();

userRouter.post("/register", asyncHandler(registerUser));
userRouter.post("/login", asyncHandler(loginUser));

export default userRouter;
