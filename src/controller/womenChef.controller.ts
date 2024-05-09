import { NextFunction, Request, Response } from "express";
import WomenChef from "./../model/womenChef.model";


// get all womenChef posts
export const getAllWomenChefPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const posts = await WomenChef.find({}).sort({ name: -1 });

    res.status(200).json({
      message: "Women chef posts create successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get single women chef post
export const getSingleWomenChefPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await WomenChef.findOne({ _id: req.params.id });

    if (!post) {
      res.status(400).json({
        message: "Women chef post Not found",
      });
    }

    res.status(200).json({
      message: "Women chef post get successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

// get all women chef post search by area
export const   getAllWomenChefPostSearchByArea = async (
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

    const posts = await WomenChef.find({area: area }); // Find by type


    res.status(200).json({
      message: "Women chef post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};
// get single women chef post search by area
export const getSingleWomenChefPostSearchByArea = async (
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

    const posts = await WomenChef.find({area: area ,_id:id}); // Find by type


    res.status(200).json({
      message: "Women chef post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};


// get all women chef post search by ammount
export const  getAllWomenChefPostSearchByAmmount = async (
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
      const posts = await WomenChef.find({payment_cost: ammount}); // Find by type
  
  
      res.status(200).json({
        message: "women chef post get successfully",
        data: posts,
      });
    } catch (err) {
      next(err);
    }
  };

  // get all women chef post search by ammount
export const  getSingleWomenChefPostSearchByAmmount = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const id=req.params.id;
      const ammount = String(req.params.ammount); // Get type from request parameter
      console.log(ammount);
  
      if (!ammount) {
        return res.status(400).json({ message: 'Missing search women chef post' });
      }
      const posts = await WomenChef.find({payment_cost: ammount,_id:id}); // Find by type
  
  
      res.status(200).json({
        message: "women chef post get successfully",
        data: posts,
      });
    } catch (err) {
      next(err);
    }
  };
  

// create new women chef post
export const createWomenChef = async (
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

    const post = await WomenChef.create(data);

    res.status(201).json({
      message: "Women chef post created Successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

// update a women chef post
export const updateWomenChefProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const post = await WomenChef.findById(postId);

    if (!post) {
      res.status(400).json({
        message: "Women chef post not found",
      });
    }

    const updatedPost = await WomenChef.findByIdAndUpdate(postId, req.body);

    res.status(200).json({
      message: "Women chef post updated successfully",
      data: updatedPost,
    });
  } catch (err) {
    next(err);
  }
};

// delete women chef post
export const deleteWomenChefPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await WomenChef.findByIdAndDelete(req.params.id);

    if (!post) {
      res.status(400).json({
        message: "Women chef post not found",
      });
    }

    res.status(200).json({
      message: "Women chef post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};

// update women Chef Post status
export const updateUserStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const womenChefPost = await WomenChef.findByIdAndUpdate(
      req.params.id,
      { $set: { status: req.body.status } },
      { new: true },
    );

    if (!womenChefPost) {
      res.status(400).json({
        message: "women chef post not found",
      });
    }

    res.status(200).json({
      message: "Status changed successfully",
      data: womenChefPost,
    });
  } catch (err) {
    next(err);
  }
};
