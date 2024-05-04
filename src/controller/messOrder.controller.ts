import { NextFunction, Request, Response } from "express";
import MessBook from "./../model/messOrder.model";

// get all mess booking post
export const getAllMessBookingPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const messes = await MessBook.find({}).sort({ booking_date: 1 });

    res.status(200).json({
      message: "Mess booking posts get successfully",
      data: messes,
    });
  } catch (err) {
    next(err);
  }
};

// get single mess booking post
export const  getSingleMessBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const mess = await MessBook.findOne({ _id: req.params.id });
    if (!mess) {
      res.status(400).json({
        message: "Mess booking Post Not found",
      });
    }

    res.status(200).json({
      message: "Mess booking post get successfully",
      data: mess,
    });
  } catch (err) {
    next(err);
  }
};

// get single mess booking post search by area
export const   getAllMessBookingPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res.status(400).json({ message: "Missing search Mess booking post" });
    }

    const posts = await MessBook.find({ booking_area: area }); // Find by type

    res.status(200).json({
      message: "Mess booking post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// create new Mess booking Post
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

    const mess = await MessBook.create(data);

    res.status(201).json({
      message: " booking post created Successfully",
      data: mess,
    });
  } catch (err) {
    next(err);
  }
};

// update a Mess booking Post
export const   updateMessBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const post = await MessBook.findById(postId);

    if (!post) {
      res.status(400).json({
        message: "Mess booking post not found",
      });
    }

    const updatedMessPost = await MessBook.findByIdAndUpdate(postId, req.body);

    res.status(200).json({
      message: "Mess booking post updated successfully",
      data: updatedMessPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete Mess booking Post
export const   deleteMessBookingPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const messPost = await MessBook.findByIdAndDelete(req.params.id);

    if (!messPost) {
      res.status(400).json({
        message: "Mess booking post not found",
      });
    }

    res.status(200).json({
      message: "Mess booking Post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
