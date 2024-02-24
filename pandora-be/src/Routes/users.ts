import { Router } from "express";
import {
  destroyUser,
  profileUser,
  signupUser,
  updateUser,
} from "../Controllers/users";
import { body } from "express-validator";
import { AppDataSource } from "../DB";
import { User } from "../Entity/users";
import auth from "../Middlewares/auth";

const router = Router();

router.post(
  "/signup",
  [
    body("email")
      .notEmpty()
      .trim()
      .isString()
      .isEmail()
      .normalizeEmail()
      .custom(async (value: any) => {
        const existingUser = await AppDataSource.manager.findOne(User, {
          where: { email: value },
        });
        if (existingUser) {
          return Promise.reject("User Email alredy used");
        } else {
          return Promise.resolve();
        }
      }),
    body("password").notEmpty().isString(),
    body("username").notEmpty().isString(),
  ],
  signupUser
);

router.post(
  "/signin",
  [
    body("email").notEmpty().trim().isString().isEmail().normalizeEmail(),

    body("password").notEmpty().isString(),
  ],
  signupUser
);

router.get("/profile", auth, profileUser);

router.put(
  "/update",
  auth,
  [
    body("email").notEmpty().trim().isString().isEmail().normalizeEmail(),
    body("password").notEmpty().isString(),
    body("username").notEmpty().isString(),
  ],
  updateUser
);

router.delete("/destroy", auth, destroyUser);


export default router