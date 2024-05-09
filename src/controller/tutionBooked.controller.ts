import { NextFunction, Request, Response } from "express";
import TutionBooked from "./../model/tutionBooked.model";

// get all tution booked posts
export const getAllTutionBookedPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const BookedPosts = await TutionBooked.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Tution booked posts create successfully",
      data: BookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// get single tution booked post
export const getSingleTutionBookedPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPost = await TutionBooked.findOne({ _id: req.params.id });

    if (!bookedPost) {
      res.status(400).json({
        message: "Tution booked post Not found",
      });
    }

    res.status(200).json({
      message: "Tution booked post get successfully",
      data: bookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// get all tution booked post search by tutionId
export const  getAllTutionBookedPostSearchBytutionId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tutionId = String(req.params.tution_Id); // Get type from request parameter
    //console.log(area);

    if (!tutionId) {
      return res.status(400).json({ message: "Missing search tution booked post" });
    }

    const bookedPosts = await TutionBooked.find({ tution_Id: tutionId }); // Find by type

    res.status(200).json({
      message: "Tution  booked post get successfully",
      data: bookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// create new tution booked post
export const createTutionBookedPost = async (
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

    const bookedPost = await TutionBooked.create(data);

    res.status(201).json({
      message: "Tution booked post created Successfully",
      data: bookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// update a Tution booked post
export const updateTutionBookedPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const bookedPost = await TutionBooked.findById(postId);

    if (!bookedPost) {
      res.status(400).json({
        message: "Booked post not found",
      });
    }

    const updateBookedPost = await TutionBooked.findByIdAndUpdate(postId, req.body);

    res.status(200).json({
      message: "Tution booked post updated successfully",
      data: updateBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete tution booked post
export const deleteTutionBookedPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPost = await TutionBooked.findByIdAndDelete(req.params.id);

    if (!bookedPost) {
      res.status(400).json({
        message: "Tution booked post not found",
      });
    }

    res.status(200).json({
      message: "Tution booked post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
