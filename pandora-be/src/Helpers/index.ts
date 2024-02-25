import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../Config";

import bcrypt from "bcrypt";

export const signToken = (payload:any): string => {

  const accessToken = jwt.sign(
    {
      userId: payload.id,
      username: payload.username,
      email: payload.email,
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return accessToken;
};

export const verifyToken = (access_token: string): any => {
  const payload: any = jwt.verify(access_token, JWT_SECRET);
  
  return payload;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch: boolean = bcrypt.compareSync(password, hashedPassword);
  return isMatch;
};

export const hashedPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashed = bcrypt.hashSync(password, salt);
  return hashed;
};
