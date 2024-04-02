import { ObjectId } from "bson";
import mongoose from "mongoose";
import validator from "validator";

const messSchema = new mongoose.Schema(
  {
      post_name: {
      type: String,
      required: true,
      },
      post_mobileNumber: {
        type: String,
        required: true,
      },
      post_secondMobileNumber: {
        type: String,
        required: true,
      },
      post_Img: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      area_name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      tolate_date: {
        type: String,
        required: true,
      },
      mess_description: {
        type: String,
        required: true,
      },
      mess_cost: {
        type: Number,
        required: true,
      },
      mess_advance: {
        type: Number,
        required: true,
      },
      mess_otherCost: {
        type: Number,
        required: true,
      },
      mess_seatNumber: {
        type: Number,
        required: true,
      },
      mess_otherDetails: {
        type: String,
        required: true,
      },
      mess_roomImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      mess_washroomImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      mess_kitchenroomImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
    
  },
  {
    timestamps: true,
  },
);

const Mess = mongoose.model("Mess", messSchema);
export default Mess;
