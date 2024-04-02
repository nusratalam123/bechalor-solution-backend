import { NextFunction, Request, Response } from "express";
import User from "./../model/user.model";
import { generateToken } from "./../utils/token";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      res.status(401).json({
        message: "email already exist",
      });
    }

    // save user to database with token
    const savedUser = await User.create(req.body);

    //@ts-expect-error
    savedUser.generateConfirmationToken();
    await savedUser.save({ validateBeforeSave: false });

    res.status(200).json({
      message: "User signup successful",
    });
  } catch (err) {
    next(err);
  }
};

// user login
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "Please provide your credentials",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "No user found. Please create an account",
      });
    }

    //@ts-expect-error
    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Password is not correct",
      });
    }

    if (user.status === "BANNED") {
      return res.status(401).json({
        message: "The user is banned",
      });
    }

    const token = generateToken(user);
    const { password: pwd, ...info } = user.toObject();

    res.status(200).json({
      message: "Successfully logged in",
      data: {
        token: token,
        info: info,
      },
    });
  } catch (err) {
    next(err);
  }
};

// // confirmEmail
// export const confimEmail = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { token } = req.params;
//     const user = await User.findOne({ confirmationToken: token });

//     if (!user) {
//       return res.status(403).json({
//         error: "Invalid token",
//       });
//     }

//     const expired = new Date() > new Date(user.confirmationTokenExpires);

//     if (expired) {
//       return res.status(401).json({
//         error: "Token expired",
//       });
//     }

//     user.status = "ACTIVE";
//     user.confirmationToken = undefined;
//     user.confirmationTokenExpires = undefined;

//     await user.save({ validateBeforeSave: false });

//     const accessToken = generateToken(user);

//     const { password: pwd, ...others } = user.toObject();

//     res.status(200).json({
//       message: "Successfully activated your account.",
//       data: {
//         user: others,
//         token: accessToken,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // forgetPassword
// export const forgetPassword = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { verifyEmail } = req.body;
//     const user = await User.findOne({ email: verifyEmail });
//     if (!user) {
//       return res.status(404).send({
//         message: "User Not found with this email!",
//       });
//     } else {
//       const token = tokenForVerify(user);
//       const body = {
//         from: secret.email_user,
//         to: `${verifyEmail}`,
//         subject: "Password Reset",
//         html: `<h2>Hello ${verifyEmail}</h2>
//         <p>A request has been received to change the password for your <strong>Shofy</strong> account </p>

//         <p>This link will expire in <strong> 10 minute</strong>.</p>

//         <p style="margin-bottom:20px;">Click this link for reset your password</p>

//         <a href=${secret.client_url}/forget-password/${token} style="background:#0989FF;color:white;border:1px solid #0989FF; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Reset Password</a>

//         <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at support@shofy.com</p>

//         <p style="margin-bottom:0px;">Thank you</p>
//         <strong>Etsy Team</strong>
//         `,
//       };
//       user.confirmationToken = token;
//       const date = new Date();
//       date.setDate(date.getDate() + 1);
//       user.confirmationTokenExpires = date;
//       await user.save({ validateBeforeSave: false });
//       const message = "Please check your email to reset password!";
//       // sendEmail(body, res, message);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// // confirm-forget-password
// export const confirmForgetPassword = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { token, password } = req.body;
//     const user = await User.findOne({ confirmationToken: token });

//     if (!user) {
//       return res.status(403).json({
//         error: "Invalid token",
//       });
//     }

//     const expired = new Date() > new Date(user.confirmationTokenExpires);

//     if (expired) {
//       return res.status(401).json({
//         error: "Token expired",
//       });
//     } else {
//       const salt = await bcrypt.genSalt(10);
//       const hash = await bcrypt.hash(password, salt);
//       await User.updateOne(
//         { confirmationToken: token },
//         { $set: { password: hash } },
//       );

//       user.confirmationToken = undefined;
//       user.confirmationTokenExpires = undefined;

//       await user.save({ validateBeforeSave: false });

//       res.status(200).json({
//         message: "Password reset successfully",
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// // change password
// export const changePassword = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { email, password, googleSignIn, newPassword } = req.body || {};
//     const user = await User.findOne({ email: email });
//     // Check if the user exists
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     if (googleSignIn) {
//       const salt = await bcrypt.genSalt(10);
//       const hash = await bcrypt.hash(newPassword, salt);
//       await User.updateOne({ email: email }, { password: hash });
//       return res.status(200).json({ message: "Password changed successfully" });
//     }
//     if (!bcrypt.compareSync(password, user?.password)) {
//       return res.status(401).json({ message: "Incorrect current password" });
//     } else {
//       const salt = await bcrypt.genSalt(10);
//       const hash = await bcrypt.hash(newPassword, salt);
//       await User.updateOne({ email: email }, { password: hash });
//       res.status(200).json({ message: "Password changed successfully" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };
