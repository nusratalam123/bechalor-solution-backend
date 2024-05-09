import { NextFunction, Request, Response } from "express";
import Mess from "./../model/flat.model";
import Flat from "./../model/flat.model";

// get all Flat post
export const getAllFlatPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const flatPosts = await Flat.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Flat posts get successfully",
      data: flatPosts,
    });
  } catch (err) {
    next(err);
  }
};

// get single Flat post
export const getSingleFlatPost= async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const flatPost = await Flat.findOne({ _id: req.params.id });
    if (!flatPost) {
      res.status(400).json({
        message: "flat Post Not found",
      });
    }

    res.status(200).json({
      message: "flat post get successfully",
      data: flatPost,
    });
  } catch (err) {
    next(err);
  }
};

// get all flat post search by area
export const   getAllFlatPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res.status(400).json({ message: 'Missing search flat post' });
    }

    const flatPosts = await Flat.find({area_name: area }); // Find by type


    res.status(200).json({
      message: "Flat post get successfully",
      data: flatPosts,
    });
  } catch (err) {
    next(err);
  }
};
// get single flat post search by area
export const   getSingleFlatPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = String(req.params.id);
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res.status(400).json({ message: 'Missing search flat post' });
    }

    const flatPosts = await Flat.find({area_name: area ,_id:id}); // Find by type


    res.status(200).json({
      message: "Flat post get successfully",
      data: flatPosts,
    });
  } catch (err) {
    next(err);
  }
};


// get all flat post search by ammount
export const  getAllFlatPostSearchByAmmount = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const ammount = String(req.params.ammount); // Get type from request parameter
      console.log(ammount);
  
      if (!ammount) {
        return res.status(400).json({ message: 'Missing search flat post' });
      }
      const flatPosts = await Flat.find({flat_cost: ammount}); // Find by type
  
  
      res.status(200).json({
        message: "Flat post get successfully",
        data: flatPosts,
      });
    } catch (err) {
      next(err);
    }
  };

  // get all flat post search by ammount
export const  getSingleFlatPostSearchByAmmount = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const id=req.params.id;
      const ammount = String(req.params.ammount); // Get type from request parameter
      console.log(ammount);
  
      if (!ammount) {
        return res.status(400).json({ message: 'Missing search flat post' });
      }
      const flatPosts = await Flat.find({flat_cost: ammount,_id:id}); // Find by type
  
  
      res.status(200).json({
        message: "Flat post get successfully",
        data: flatPosts,
      });
    } catch (err) {
      next(err);
    }
  };
  

// create new flat Post
export const createFlatPost = async (
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
  
      const flatPost = await Flat.create(data);
  
      res.status(201).json({
        message: "Flat Post created Successfully",
        data: flatPost,
      });
    } catch (err) {
      next(err);
    }
  };

  // update a flat Post
export const updateFlatPost = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const postId = req.params.id;
      const flatPost = await Flat.findById(postId);
  
      if (!flatPost) {
        res.status(400).json({
          message: "Flat post not found",
        });
      }
  
      const updatedFlatPost = await Flat.findByIdAndUpdate(postId, req.body);
  
      res.status(200).json({
        message: "Flat post updated successfully",
        data: updatedFlatPost,
      });
    } catch (err) {
      next(err);
    }
  };

  // delete Flat Post
export const deleteFlatPost= async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const flatPost = await Flat.findByIdAndDelete(req.params.id);
  
      if (!flatPost) {
        res.status(400).json({
          message: "Flat post not found",
        });
      }
  
      res.status(200).json({
        message: "Flat Post Deleted Successfully",
      });
    } catch (err) {
      next(err);
    }
  };
  
  