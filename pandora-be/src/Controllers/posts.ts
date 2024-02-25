import { NextFunction, Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import { Post } from "../Entity/posts";
import { AppDataSource } from "../DB";
import { User } from "../Entity/users";

export const createPost = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [post create]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const user = await AppDataSource.manager.findOne(User, {
        where: { id: req.body.userId },
      });

      const post = new Post();
      post.title = req.body.title;
      post.content = req.body.content;
      post.user = user;
      const newPost = await AppDataSource.manager.save(post);
      res.status(201).json({
        data: newPost,
        status: 201,
        message: "created successfully",
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const allPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [fetch posts]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const { page = 1, limit = 10 } = req.query;
      const pageNumber = parseInt(page as string);
      const limitNumber = parseInt(limit as string);
      const [posts, total] = await AppDataSource.manager.findAndCount(Post, {
        relations: ["user"],
        skip: (pageNumber - 1) * limitNumber,
        take: limitNumber,
        order: { updated_at: "DESC" },
      });
      const totalPages = Math.ceil(total / limitNumber);
      res.status(200).json({
        page: pageNumber,
        limit: limitNumber,
        totalItems: total,
        totalPages: totalPages,
        posts: posts,
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const singlePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [fetch posts]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const post = await AppDataSource.manager.findOne(Post, {
        where: { id: Number(req.params.id) },
        relations: { user: true },
      });
      res.status(200).json({
        data: post,
        message: "fetch successfully!",
        status: 200,
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const updatePost = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [update post]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const post = await AppDataSource.manager.findOne(Post, {
        where: { id: req.params.id, user: { id: req.userId } },
      });
      if (post) {
        if (req.body.title) {
          post.title = req.body.title;
          post.content = req.body.content;
        }
        const updatedPost = await AppDataSource.manager.save(post);
        res.status(200).json({
          data: updatedPost,
          message: "updated successfully!",
          status: 200,
        });
      } else {
        const error: any = new Error(`You can't edit this post.`);
        error.statusCode = 401;
        throw error;
      }
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const destroyPost = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [update post]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const post = await AppDataSource.manager.findOne(Post, {
        where: { id: req.params.id, user: { id: req.userId } },
      });
      if (post) {
        if (req.body.title) {
          post.title = req.body.title;
          post.content = req.body.content;
        }
        await AppDataSource.manager.delete(Post, { id: req.params.id });
        res.status(200).json({
          message: "deleted successfully!",
          status: 200,
        });
      } else {
        const error: any = new Error(`You can't destroy this post.`);
        error.statusCode = 401;
        throw error;
      }
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
