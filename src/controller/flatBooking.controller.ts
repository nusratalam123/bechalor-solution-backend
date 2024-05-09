import { NextFunction, Request, Response } from "express";
import FlatBook from "./../model/flatOrder.model";

// get all Flat booked post
export const getAllFlatBookingPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const flatBookedPosts = await FlatBook.find({}).sort({ tolate_date: -1 });

    res.status(200).json({
      message: "Flat booked posts get successfully",
      data: flatBookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// get single Flat booked post
export const getSingleFlatBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const flatBookedPost = await FlatBook.findOne({ _id: req.params.id });
    if (!flatBookedPost) {
      res.status(400).json({
        message: "Flat booked Post Not found",
      });
    }

    res.status(200).json({
      message: "Flat booked post get successfully",
      data: flatBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// get all flat booked post search by area
export const getAllFlatBookingPostSearchByArea = async (
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
        .json({ message: "Missing search flat booked post" });
    }

    const flatBookedPosts = await FlatBook.find({ booking_area: area }); // Find by type

    res.status(200).json({
      message: "Flat booked post get successfully",
      data: flatBookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// get single flat booked post search by area
export const getSingleFlatBookingPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = String(req.params.id);
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res
        .status(400)
        .json({ message: "Missing search flat booked post" });
    }

    const flatBookedPosts = await FlatBook.find({
      booking_area: area,
      _id: id,
    }); // Find by type

    res.status(200).json({
      message: "Flat booking post get successfully",
      data: flatBookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// create new flat booked Post
export const createFlatBookingPost = async (
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

    const flatBookedPost = await FlatBook.create(data);

    res.status(201).json({
      message: "Flat booked Post created Successfully",
      data: flatBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// update a flat booked Post
export const updateFlatBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const flatBookedPost = await FlatBook.findById(postId);

    if (!flatBookedPost) {
      res.status(400).json({
        message: "Flat booked post not found",
      });
    }

    const updatedFlatBookedPost = await FlatBook.findByIdAndUpdate(
      postId,
      req.body,
    );

    res.status(200).json({
      message: "Flat booked post updated successfully",
      data: updatedFlatBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete Flat booked Post
export const deleteFlatBokingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const flatBookedPost = await FlatBook.findByIdAndDelete(req.params.id);

    if (!flatBookedPost) {
      res.status(400).json({
        message: "Flat booked post not found",
      });
    }

    res.status(200).json({
      message: "Flat Booked Post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
