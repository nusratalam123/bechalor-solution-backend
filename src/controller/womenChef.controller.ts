import { NextFunction, Request, Response } from "express";
import User from "./../model/womenChef.model";

// get all users
export const getAllWomenChefPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await User.find({}).sort({ name: -1 });

    res.status(200).json({
      message: "women chef posts create successfully",
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

// get single user
export const getSingleWomenChefPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      res.status(400).json({
        message: "Women chef post Not found",
      });
    }

    res.status(200).json({
      message: "Women chef post get successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// get single user status
export const getSingleUserStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).select("status");

    if (!user) {
      res.status(200).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User status get successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// create new user
export const createWomenChef = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    if (Object.keys(data).length === 0) {
      res.status(400).json({
        message: "Data can't be empty",
      });
    }

    const user = await User.create(data);

    res.status(201).json({
      message: "womenChef post created Successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// update a profile
export const updateWomenChefProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      res.status(400).json({
        message: "User not found",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, req.body);

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

// delete user
export const deleteWomenChefPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(400).json({
        message: "Women chef post not found",
      });
    }

    res.status(200).json({
      message: "Women chef post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};

// update user status
export const updateUserStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const womenChefPost = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { status: req.body.status } },
      { new: true },
    );

    if (!womenChefPost) {
      res.status(400).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Status changed successfully",
      data: womenChefPost,
    });
  } catch (err) {
    next(err);
  }
};
