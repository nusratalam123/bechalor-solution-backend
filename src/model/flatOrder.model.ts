import { ObjectId } from "bson";

import mongoose from "mongoose";
import validator from "validator";

const flatOrderSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_mobileNumber: {
      type: String,
      required: true,
    },
    user_secondMobileNumber: {
      type: String,
      required: true,
    },
    user_Img: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    profession: {
      type: String,
      required: true,
    },
    present_address: {
      type: String,
      required: true,
    },
    permanent_address: {
      type: String,
      required: true,
    },
    guardian_name: {
      type: String,
      required: true,
    },
    guardian_mobileNumber: {
      type: String,
      required: true,
    },
    Relation_with_guardian: {
      type: String,
      required: true,
    },
    Relegion: {
      type: String,
      required: true,
    },
    marital: {
      type: String,
      required: true,
    },
    booking_area: {
      type: String,
      required: true,
    },
    booking_date: {
      type: String,
      required: true,
    },
    family_member: {
      type: Number,
      required: true,
    },
    user_NIDImg: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    user_InstituteImg: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    user_dateOfBirthImg: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
  },
  {
    timestamps: true,
  },
);

const flatOrder = mongoose.model("FlatOder", flatOrderSchema);
export default flatOrder;
