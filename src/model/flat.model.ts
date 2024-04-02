import { ObjectId } from "bson";
import mongoose from "mongoose";
import validator from "validator";

const flatSchema = new mongoose.Schema(
  {
      post_name: {
      type: String,
      required: true,
      },
      post_mobileNumber: {
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
      flat_roomNumber: {
        type: Number,
        required: true,
      },
      flat_washroomNumber: {
        type: Number,
        required: true,
      },
      flat_coridoorNumber: {
        type: Number,
        required: true,
      },
      flat_otherRoomInfo: {
        type: String,
        required: true,
      },
      flat_description: {
        type: String,
        required: true,
      },
      flat_cost: {
        type: Number,
        required: true,
      },
      flat_advance: {
        type: Number,
        required: true,
      },
      flat_otherDetails: {
        type: String,
        required: true,
      },
      flat_roomImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      flat_washRoomImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      flat_kitchenRoomImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      flat_coridoorImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      flat_drawingRoomImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      flat_dainingRoomImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      flat_currentBill: {
        type: String,
        required: true,
      },
      flat_waterBill: {
        type: Number,
        required: true,
      },
      flat_gasBill: {
        type: Number,
        required: true,
      },
      flat_liftCharge: {
        type: String,
        required: true,
      },
      flat_otherCost: {
        type: String,
        required: true,
      },
    
  },
  {
    timestamps: true,
  },
);

const Flat = mongoose.model("Flat", flatSchema);
export default Flat;
