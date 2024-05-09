import { NextFunction, Request, Response } from "express";
import MessBook from "./../model/messOrder.model";

// get all mess booked post
export const getAllMessBookingPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const messBookedPosts = await MessBook.find({}).sort({ booking_date: 1 });

    res.status(200).json({
      message: "Mess booked posts get successfully",
      data: messBookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// get single mess booked post
export const getSingleMessBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const messBookedPost = await MessBook.findOne({ _id: req.params.id });
    if (!messBookedPost) {
      res.status(400).json({
        message: "Mess booked Post Not found",
      });
    }

    res.status(200).json({
      message: "Mess booked post get successfully",
      data: messBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// get single mess booked post search by area
export const getAllMessBookingPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res
        .status(400)
        .json({ message: "Missing search Mess booked post" });
    }

    const messBookedPosts = await MessBook.find({ booking_area: area }); // Find by type

    res.status(200).json({
      message: "Mess booked post get successfully",
      data: messBookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// create new Mess booked Post
export const createMessBookingPost = async (
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

    const messBookedPost = await MessBook.create(data);

    res.status(201).json({
      message: " Mess booked post created Successfully",
      data: messBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// update a Mess booked Post
export const updateMessBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const messBookedPost = await MessBook.findById(postId);

    if (!messBookedPost) {
      res.status(400).json({
        message: "Mess booked post not found",
      });
    }

    const updatedMessBookedPost = await MessBook.findByIdAndUpdate(
      postId,
      req.body,
    );

    res.status(200).json({
      message: "Mess booked post updated successfully",
      data: updatedMessBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete Mess booked Post
export const deleteMessBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const messBookedPost = await MessBook.findByIdAndDelete(req.params.id);

    if (!messBookedPost) {
      res.status(400).json({
        message: "Mess booked post not found",
      });
    }

    res.status(200).json({
      message: "Mess booked post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
