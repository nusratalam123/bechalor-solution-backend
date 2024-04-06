import { NextFunction, Request, Response } from "express";
import Mess from "./../model/mess.model";

// get all mess post
export const getAllMessPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const messes= await Mess.find({}).sort({ tolate_date: -1 });

    res.status(200).json({
      message: "Mess posts get successfully",
      data: messes,
    });
  } catch (err) {
    next(err);
  }
};

// get single mess post
export const getSinglePost= async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const mess = await Mess.findOne({ _id: req.params.id });
    if (!mess) {
      res.status(400).json({
        message: "Mess Post Not found",
      });
    }

    res.status(200).json({
      message: "Mess post get successfully",
      data: mess,
    });
  } catch (err) {
    next(err);
  }
};

// get single mess post search by area
export const   getAllPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res.status(400).json({ message: 'Missing search Mess post' });
    }

    const posts = await Mess.find({area_name: area }); // Find by type


    res.status(200).json({
      message: "Mess post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};


// get single mess post search by ammount
export const  getAllPostSearchByAmmount = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const ammount = String(req.params.ammount); // Get type from request parameter
      console.log(ammount);
  
      if (!ammount) {
        return res.status(400).json({ message: 'Missing search Mess post' });
      }
  
      const posts = await Mess.find({mess_cost: ammount}); // Find by type
  
  
      res.status(200).json({
        message: "Mess post get successfully",
        data: posts,
      });
    } catch (err) {
      next(err);
    }
  };
  

// create new Mess Post
export const createMessPost = async (
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
  
      const mess = await Mess.create(data);
  
      res.status(201).json({
        message: "Post created Successfully",
        data: mess,
      });
    } catch (err) {
      next(err);
    }
  };

  // update a Mess Post
export const updateMessPost = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const postId = req.params.id;
      const post = await Mess.findById(postId);
  
      if (!post) {
        res.status(400).json({
          message: "Mess post not found",
        });
      }
  
      const updatedMessPost = await Mess.findByIdAndUpdate(postId, req.body);
  
      res.status(200).json({
        message: "Mess post updated successfully",
        data: updatedMessPost,
      });
    } catch (err) {
      next(err);
    }
  };

  // delete Mess Post
export const deleteMessPost= async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const messPost = await Mess.findByIdAndDelete(req.params.id);
  
      if (!messPost) {
        res.status(400).json({
          message: "Mess post not found",
        });
      }
  
      res.status(200).json({
        message: "Mess Post Deleted Successfully",
      });
    } catch (err) {
      next(err);
    }
  };
  
  