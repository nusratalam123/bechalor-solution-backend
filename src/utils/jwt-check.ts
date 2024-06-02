import { NextFunction, Request, Response } from "express";
import { getBearerToken, verifyToken } from "./token";
import Blacklist from "../model/blacklist.model";
import jwt from "jsonwebtoken";
import secrets from "../config/secret";

/**
 * JWT CHECK
 * It can be used to check jwt token in route basis.
 * if the route is allowed by middleware but want to
 * check otherwise, this function can be used
 */
export async function jwtCheck(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const isTokenExist = await verifyToken(req);
    if (!isTokenExist) {
      throw new Error("Unauthorized");
    }

    const token = await getBearerToken(req);
    jwt.verify(token, secrets.jwt_secret, (err: any) => {
      if (err) {
        throw new Error("Forbidden");
      }
    });

    const isRevoked = await Blacklist.find({ token: token });
    if (isRevoked.length != 0) {
      throw new Error("Revoked");
    }

    next();
  } catch (err: any) {
    return res.status(403).json({
      message: err.message,
    });
  }
}
