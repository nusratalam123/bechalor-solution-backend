
import mongoose from "mongoose";
import validator from "validator";

const womenChefSchema = new mongoose.Schema(
  {
      womenChef_name: {
      type: String,
      required: true,
      },
      womenChef_mobileNumber: {
        type: String,
        required: true,
      },
      womenChef_age: {
        type: Number,
        required: true,
        },
      womenChef_Img: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      womenChef_NIDImg: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"],
      },
      womenChef_dateOfBirthImg: {
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
      working_area:{
        type: String,
        required: true,
      },
      working_date: {
        type: String,
        required: true,
      },
      chef_description: {
        type: String,
        required: true,
      },
      payment_cost: {
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
  },
);

const WomenChef = mongoose.model("WomenChef", womenChefSchema);
export default WomenChef;
