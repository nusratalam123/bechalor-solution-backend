import { ObjectId } from "bson";
import mongoose from "mongoose";
import validator from "validator";

const vehicleSchema = new mongoose.Schema(
  {
      driver_name: {
      type: String,
      required: true,
      },
      driver_mobileNumber: {
        type: String,
        required: true,
      },
      driver_Img: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      driver_NIDImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      driver_dateOfBirthImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      driver_licenseImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      area: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    
      car_type: {
        type: String,
        required: true,
      },
      car_IMG: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      car_cost: {
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
  },
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
