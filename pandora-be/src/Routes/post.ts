import { Router } from "express";
import {
  allPosts,
  createPost,
  destroyPost,
  singlePost,
  updatePost,
} from "../Controllers/posts";
import auth from "../Middlewares/auth";
import { body } from "express-validator";

const router = Router();

router.get("/all-posts", allPosts);

router.get("/get-post/:id", singlePost);

router.post(
  "/create-post",
  auth,
  [body("title").notEmpty().isString(), body("content").notEmpty().isString()],
  createPost
);

router.put(
  "/update-post/:id",
  auth,
  [body("title").notEmpty().isString(), body("content").notEmpty().isString()],
  updatePost
);

router.delete("/destroy-post/:id",auth,[],destroyPost)

export default router