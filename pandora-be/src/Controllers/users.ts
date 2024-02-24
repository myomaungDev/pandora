import { NextFunction, Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import { User } from "../Entity/users";
import { AppDataSource } from "../DB";
import { comparePassword, signToken } from "../Helpers";

export const signupUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [user signup]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const user = new User();
      user.email = req.body.email;
      user.password = req.body.password;
      user.username = req.body.username;
      const newUser = await AppDataSource.manager.save(user);
      const accessToken = signToken(newUser);
      res.status(201).json({
        data: newUser,
        status: 201,
        access_token: accessToken,
        message: "Signup successfully",
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const signinUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [user signin]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const user = await AppDataSource.manager.findOne(User, {
        where: { email: req.body.email },
      });
      if (user) {
        const isMatchPassword = await comparePassword(
          req.body.password,
          user.password
        );
        if (isMatchPassword) {
          const accessToken = signToken(user);
          res.status(200).json({
            data: user,
            message: "user login successfully!",
            status: 200,
            access_token: accessToken,
          });
        } else {
          const error: any = new Error(`password doesn't match!`);
          error.statusCode = 422;
          throw error;
        }
      } else {
        const error: any = new Error(`email doesn't exist!`);
        error.statusCode = 422;
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

export const profileUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [user update]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const user = await AppDataSource.manager.findOne(User, {
        where: { id: req.userId },
      });
      if (user) {
        res.status(201).json({
          data: user,
          status: 200,
          message: "get profile successfully",
        });
      } else {
        const error: any = new Error(`user doesn't exist!`);
        error.statusCode = 422;
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

export const updateUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [user update]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const user = await AppDataSource.manager.findOne(User, {
        where: { id: req.userId },
      });
      if (user) {
        if (req.body.email) {
          user.email = req.body.email;
        }
        if (req.body.password) {
          user.password = req.body.password;
        }
        if (req.body.username) {
          user.username = req.body.username;
        }
        const updatedUser = await AppDataSource.manager.save(user);
        res.status(201).json({
          data: updatedUser,
          status: 200,
          message: "updated successfully",
        });
      } else {
        const error: any = new Error(`user doesn't exist!`);
        error.statusCode = 422;
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

export const destroyUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validaton from [user destroy]");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const user = await AppDataSource.manager.findOne(User, {
        where: { id: req.userId },
      });
      if (user) {
        const destroyedUser = await AppDataSource.manager.delete(User, {
          id: user.id,
        });
        res.status(201).json({
          data: destroyedUser,
          status: 200,
          message: "destroyed successfully",
        });
      } else {
        const error: any = new Error(`user doesn't exist!`);
        error.statusCode = 422;
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
