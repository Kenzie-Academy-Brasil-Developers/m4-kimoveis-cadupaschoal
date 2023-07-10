import { AppError } from "../errors";
import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) throw new AppError("Missing bearer token", 401);

  const [_bearer, token]: string[] = authorization.split(" ");

  res.locals = {
    ...res.locals,
    decoded: verify(token, process.env.SECRET_KEY!),
  };

  return next();
};
