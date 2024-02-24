import { Response, NextFunction } from "express";
import { verifyToken } from "../Helpers";
export default function (req: any, _res: Response, next: NextFunction) {
  try {
    const authHeader = req.get("Authorization");
    if (authHeader) {
      const token: string = authHeader.split(" ")[1];
      const decoded_token: any = verifyToken(token)
      if (decoded_token) {
        const user_id: any = decoded_token.userId
        req.userId = user_id;
        next();
      } else {
        const error: any = new Error("Unauthenticatd User!");
        error.statusCode = 401;
      }
    } else {
      const error: any = new Error("Unauthenticatd User!");
      error.statusCode = 401;
      throw error;
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}
