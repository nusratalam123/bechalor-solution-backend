import { NextFunction, Request, Response } from "express";
import FlatBook from "./../model/flatOrder.model";

// get all Flat booking post
export const getAllFlatBookingPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const posts = await FlatBook.find({}).sort({ tolate_date: -1 });

    res.status(200).json({
      message: "Flat booking posts get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get single Flat booking post
export const getSingleFlatBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await FlatBook.findOne({ _id: req.params.id });
    if (!post) {
      res.status(400).json({
        message: "flat booking Post Not found",
      });
    }

    res.status(200).json({
      message: "flat booking post get successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

// get all flat booking post search by area
export const getAllFlatBookingPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res.status(400).json({ message: "Missing search flat post" });
    }

    const posts = await FlatBook.find({ booking_area: area }); // Find by type

    res.status(200).json({
      message: "Flat booking post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get single flat booking post search by area
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
        .json({ message: "Missing search flat booking post" });
    }

    const posts = await FlatBook.find({ booking_area: area, _id: id }); // Find by type

    res.status(200).json({
      message: "Flat booking post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// create new flat booking Post
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

    const flat = await FlatBook.create(data);

    res.status(201).json({
      message: "Flat booking Post created Successfully",
      data: flat,
    });
  } catch (err) {
    next(err);
  }
};

// update a flat booking Post
export const updateFlatBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const post = await FlatBook.findById(postId);

    if (!post) {
      res.status(400).json({
        message: "Flat booking post not found",
      });
    }

    const updatedFlatBookingPost = await FlatBook.findByIdAndUpdate(
      postId,
      req.body,
    );

    res.status(200).json({
      message: "Flat booking post updated successfully",
      data: updatedFlatBookingPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete Flat booking Post
export const deleteFlatBokingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const flatPost = await FlatBook.findByIdAndDelete(req.params.id);

    if (!flatPost) {
      res.status(400).json({
        message: "Flat booking post not found",
      });
    }

    res.status(200).json({
      message: "Flat booking Post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
