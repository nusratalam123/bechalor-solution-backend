import mongoose from "mongoose";
import validator from "validator";

const womenChefBookingSchema = new mongoose.Schema(
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
    permanent_address: {
      type: String,
      required: true,
    },
    user_NIDImg: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    working_type: {
      type: String,
      required: true, //family or mess
    }
  },
  {
    timestamps: true,
  },
);

const womenChefBooked = mongoose.model("WomenChefBook", womenChefBookingSchema);
export default womenChefBooked;
