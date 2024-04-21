import { NextFunction, Request, Response } from "express";
import Tution from "./../model/tutionSector.mode";

// get all tution posts
export const getAllTutionPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const posts = await Tution.find({}).sort({ name: -1 });

    res.status(200).json({
      message: "Tution posts create successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get single tution post
export const getSingleTutionPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await Tution.findOne({ _id: req.params.id });

    if (!post) {
      res.status(400).json({
        message: "Tution post Not found",
      });
    }

    res.status(200).json({
      message: "Tution post get successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

// get all tution post search by area
export const getAllTutionPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res.status(400).json({ message: "Missing search tution post" });
    }

    const posts = await Tution.find({ area: area }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};
// get single tution post search by area
export const getSingleTutionPostSearchByArea = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = String(req.params.id);
    const area = String(req.params.area); // Get type from request parameter
    //console.log(area);

    if (!area) {
      return res.status(400).json({ message: "Missing search tution post" });
    }

    const posts = await Tution.find({ area: area, _id: id }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get all Tution post search by ammount
export const getAllTutionPostSearchByAmmount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ammount = String(req.params.ammount); // Get type from request parameter
    console.log(ammount);

    if (!ammount) {
      return res.status(400).json({ message: "Missing search tution post" });
    }
    const posts = await Tution.find({ honorable: ammount }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get single tution post search by ammount
export const getSingleTutionPostSearchByAmmount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const ammount = String(req.params.ammount); // Get type from request parameter
    console.log(ammount);

    if (!ammount) {
      return res
        .status(400)
        .json({ message: "Missing search Tution post" });
    }
    const posts = await Tution.find({ honorable: ammount, _id: id }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};


// get all Tution post search by group
export const getAllTutionPostSearchByGroup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const group = String(req.params.group); // Get type from request parameter
    console.log(group);

    if (!group) {
      return res.status(400).json({ message: "Missing search tution post" });
    }
    const posts = await Tution.find({ student_group: group }); // Find by type

    res.status(200).json({
      message: "Tution posts get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get single tution post search by group
export const getSingleTutionPostSearchByGroup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const group = String(req.params.group); // Get type from request parameter
    console.log(group);

    if (!group) {
      return res
        .status(400)
        .json({ message: "Missing search Tution post" });
    }
    const posts = await Tution.find({ student_group: group, _id: id }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get all Tution post search by class
export const getAllTutionPostSearchByClass = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentClass = String(req.params.class); // Get type from request parameter
   // console.log(studentClass);

    if (!studentClass) {
      return res.status(400).json({ message: "Missing search tution post" });
    }
    const posts = await Tution.find({ student_class: studentClass }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get all tution post search by class
export const getSingleTutionPostSearchByClass = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const studentClass = String(req.params.class); // Get type from request parameter
   // console.log(studentClass);

    if (!studentClass) {
      return res
        .status(400)
        .json({ message: "Missing search Tution post" });
    }
    const posts = await Tution.find({ student_class: studentClass, _id: id }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get all Tution post search by month
export const getAllTutionPostSearchByMonth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const Month = String(req.params.month); // Get type from request parameter
    console.log(Month);

    if (!Month) {
      return res.status(400).json({ message: "Missing search tution post" });
    }
    const posts = await Tution.find({ start_teachingMonth: Month }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// get all tution post search by Month
export const getSingleTutionPostSearchByMonth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const Month = String(req.params.month); // Get type from request parameter
    console.log(Month);

    if (!Month) {
      return res
        .status(400)
        .json({ message: "Missing search Tution post" });
    }
    const posts = await Tution.find({ start_teachingMonth: Month, _id: id }); // Find by type

    res.status(200).json({
      message: "Tution post get successfully",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// create new tution post
export const createTutionPost = async (
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

    const post = await Tution.create(data);

    res.status(201).json({
      message: "Tution post created Successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

// update a Tution post
export const updateTutionPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const postId = req.params.id;
    const post = await Tution.findById(postId);

    if (!post) {
      res.status(400).json({
        message: "post not found",
      });
    }

    const updatedUser = await Tution.findByIdAndUpdate(postId, req.body);

    res.status(200).json({
      message: "Tution post updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

// delete tution post
export const deleteTutionPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await Tution.findByIdAndDelete(req.params.id);

    if (!post) {
      res.status(400).json({
        message: "Tution post not found",
      });
    }

    res.status(200).json({
      message: "Tution post Deleted Successfully",
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
    const womenChefPost = await Tution.findByIdAndUpdate(
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
