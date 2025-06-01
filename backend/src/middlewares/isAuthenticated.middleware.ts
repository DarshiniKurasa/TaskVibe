import { Request, Response, NextFunction } from "express";
import { UnauthorizedException } from "../utils/appError";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  throw new UnauthorizedException("Unauthorized. Please log in.");
};
