import { NextFunction, Request, Response } from "express";
import WomenChefBook from "../model/womenChefBook.model";

// get all women-chef booking post
export const getAllWomenChefBookingPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPosts = await WomenChefBook.find({}).sort({ booking_date: 1 });

    res.status(200).json({
      message: " Women-chef booking posts get successfully",
      data: bookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// get single  women-chef booking post
export const getSingleWomenChefBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPost = await WomenChefBook.findOne({ _id: req.params.id });
    if (!bookedPost) {
      res.status(400).json({
        message: " Women-chef booking Post Not found",
      });
    }

    res.status(200).json({
      message: "Women-chef booking post get successfully",
      data: bookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// create new  women-chef booking Post
export const createWomenChefBookingPost = async (
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

    const bookedPost = await WomenChefBook.create(data);

    res.status(201).json({
      message: "Women-chef booking post created Successfully",
      data: bookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// update a  women-chef booking Post
export const updateWomenChefBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const bookPost = await WomenChefBook.findById(postId);

    if (!bookPost) {
      res.status(400).json({
        message: "Women-chef booking post not found",
      });
    }

    const updatedBookedPost = await WomenChefBook.findByIdAndUpdate(
      postId,
      req.body,
    );

    res.status(200).json({
      message: "Women-chef booking post updated successfully",
      data: updatedBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete  women-chef booking Post
export const  deleteWomenChefBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPost = await WomenChefBook.findByIdAndDelete(req.params.id);

    if (!bookedPost) {
      res.status(400).json({
        message: "women-chef booking post not found",
      });
    }

    res.status(200).json({
      message: "Women-chef booking Post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
