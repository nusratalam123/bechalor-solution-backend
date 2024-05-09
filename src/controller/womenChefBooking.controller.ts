import { NextFunction, Request, Response } from "express";
import WomenChefBook from "../model/womenChefBook.model";

// get all women-chef booked post
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

// get single  women-chef booked post
export const getSingleWomenChefBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPost = await WomenChefBook.findOne({ _id: req.params.id });
    if (!bookedPost) {
      res.status(400).json({
        message: " Women-chef booked Post Not found",
      });
    }

    res.status(200).json({
      message: "Women-chef booked post get successfully",
      data: bookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// create new  women-chef booked Post
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
      message: "Women-chef booked post created Successfully",
      data: bookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// update a  women-chef booked Post
export const updateWomenChefBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const bookedPost = await WomenChefBook.findById(postId);

    if (!bookedPost) {
      res.status(400).json({
        message: "Women-chef booked post not found",
      });
    }

    const updatedBookedPost = await WomenChefBook.findByIdAndUpdate(
      postId,
      req.body,
    );

    res.status(200).json({
      message: "Women-chef booked post updated successfully",
      data: updatedBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete  women-chef booked Post
export const  deleteWomenChefBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPost = await WomenChefBook.findByIdAndDelete(req.params.id);

    if (!bookedPost) {
      res.status(400).json({
        message: "Women-chef booked post not found",
      });
    }

    res.status(200).json({
      message: "Women-chef Booked Post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
