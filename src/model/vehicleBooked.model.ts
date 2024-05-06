import mongoose from "mongoose";
import validator from "validator";

const vehicleBookingSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_mobileNumber: {
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
    user_NIDImg: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    booking_area: {
      type: String,
      required: true,
    },
    car_type: {
      type: String,
      required: true, //small-van or semi-truck or truck
    },
  },
  {
    timestamps: true,
  },
);

const vehicleBooked = mongoose.model("vehicleBook", vehicleBookingSchema);
export default vehicleBooked;
