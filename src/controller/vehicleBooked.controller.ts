import { NextFunction, Request, Response } from "express";
import VehicleBook from "./../model/vehicleBooked.model";

// get all vehicle  booking post
export const getAllVehicleBookingPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPosts = await VehicleBook.find({});

    res.status(200).json({
      message: "Vehicle  booking posts get successfully",
      data: bookedPosts,
    });
  } catch (err) {
    next(err);
  }
};

// get single vehicle  booking post
export const getSingleVehicleBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPost = await VehicleBook.findOne({ _id: req.params.id });
    if (!bookedPost) {
      res.status(400).json({
        message: "Vehicle  booking Post Not found",
      });
    }

    res.status(200).json({
      message: "vehicle booking post get successfully",
      data: bookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// get single vehicle  booking post search by area
export const getAllVehicleBookingPostSearchByArea = async (
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
        .json({ message: "Missing search vehicle booking post" });
    }

    const posts = await VehicleBook.find({ booking_area: area }); // Find by type

    res.status(200).json({
      message: "vehicle booking post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// create new vehicle booking Post
export const createVehicleBookingPost = async (
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

    const bookedPost = await VehicleBook.create(data);

    res.status(201).json({
      message: "Vehicle booking post created Successfully",
      data: bookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// update a vehicle  booking Post
export const updateVehicleBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const bookedPost = await VehicleBook.findById(postId);

    if (!bookedPost) {
      res.status(400).json({
        message: "Mess booking post not found",
      });
    }

    const updatedBookedPost = await VehicleBook.findByIdAndUpdate(
      postId,
      req.body,
    );

    res.status(200).json({
      message: "Vehicle booking post updated successfully",
      data: updatedBookedPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete vehicle  booking Post
export const deletevehicleBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookedPost = await VehicleBook.findByIdAndDelete(req.params.id);

    if (!bookedPost) {
      res.status(400).json({
        message: "Vehicle booking post not found",
      });
    }

    res.status(200).json({
      message: "Vehicle booking Post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
