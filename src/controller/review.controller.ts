import { NextFunction, Request, Response } from "express";
import Review from "./../model/review.model";

// get all reviews
export const getAllReviews = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviews = await Review.find({});

    res.status(200).json({
      message: "Reviews get successfully",
      data: reviews,
    });
  } catch (err) {
    next(err);
  }
};

// get single review
export const getSingleReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const review = await Review.findOne({ _id: req.params.id });

    if (!review) {
      res.status(400).json({
        message: "Review Not found",
      });
    }

    res.status(200).json({
      message: "Review get successfully",
      data: review,
    });
  } catch (err) {
    next(err);
  }
};

// create new review
export const createReview = async (
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

    const review = await Review.create(data);

    res.status(201).json({
      message: "Review created Successfully",
      data: review,
    });
  } catch (err) {
    next(err);
  }
};

// update a review
export const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);

    if (!review) {
      res.status(400).json({
        message: "Review not found",
      });
    }

    const updatedReview = await Review.findByIdAndUpdate(reviewId, req.body);

    res.status(200).json({
      message: "Review updated successfully",
      data: updatedReview,
    });
  } catch (err) {
    next(err);
  }
};

// delete review
export const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      res.status(400).json({
        message: "Review not found",
      });
    }

    res.status(200).json({
      message: "Review Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
