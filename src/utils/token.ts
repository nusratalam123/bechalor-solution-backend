import { Request } from "express";
import jwt from "jsonwebtoken";
import secrets from "../config/secret";

type User = {
  name: string;
  email: string;
  role: string;
};

// generate jwt token
export const generateToken = (user: Partial<User>) => {
  const payload = {
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, secrets.jwt_secret, {
    expiresIn: "2d",
  });
  return token;
};

export const verifyToken = async (req: Request) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      return true;
    } else {
      throw new Error();
    }
  } catch (err) {
    return false;
  }
};

export const getBearerToken = async (req: Request) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      return bearerToken;
    } else {
      throw new Error("Token is unavailable");
    }
  } catch (err: any) {
    return err.message as string;
  }
};

// import jwt from "jsonwebtoken";
// import secrets from "../config/secret";

// type User = {
//   name: string;
//   email: string;
//   role: string;
//   password: string;
// };

// // generate jwt token
// export const generateToken = (user: Partial<User>) => {
//   const payload = {
//     name: user.name,
//     email: user.email,
//     role: user.role,
//   };

//   const token = jwt.sign(payload, secrets.token_secret, {
//     expiresIn: "2d",
//   });

//   return token;
// };

// // tokenForVerify
// export const tokenForVerify = (user: Partial<User>) => {
//   return jwt.sign(
//     {
//       name: user.name,
//       email: user.email,
//       password: user.password,
//     },
//     secrets.jwt_secret_for_verify,
//     { expiresIn: "10m" },
//   );
// };
