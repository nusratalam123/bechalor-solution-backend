import { NextFunction, Request, Response } from "express";
import Blog from "./../model/blog.model";

export const getAllBlogs = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const blogs = await Blog.find({});

    res.status(200).json({
      message: "Blogs get successfully",
      data: blogs,
    });
  } catch (err) {
    next(err);
  }
};

export const getSingleBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });

    if (!blog) {
      res.status(401).json({
        message: "Blog Not found",
      });
    }

    res.status(200).json({
      message: "Blog get successfully",
      data: blog,
    });
  } catch (err) {
    next(err);
  }
};

export const addBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    if (!data) {
      res.status(401).json({
        message: "Data can't be empty",
      });
    }

    const blog = await Blog.create(data);

    res.status(200).json({
      message: "Blog created successfully",
      data: blog,
    });
  } catch (err) {
    next(err);
  }
};

export const updateBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      res.status(401).json({
        message: "Blog not found",
      });
    }

    await Blog.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "Blog updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "User Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};
