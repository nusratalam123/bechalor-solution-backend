import { ObjectId } from "bson";
import mongoose from "mongoose";
import validator from "validator";

const tutionSchema = new mongoose.Schema(
  {
      guardian_name: {
      type: String,
      required: true,
      },
      guardian_mobileNumber: {
        type: String,
        required: true,
      },
      guardian_secondMobileNumber: {
        type: String,
        required: true,
      },
      student_name: {
        type: String,
        required: true,
      },
      student_number: {
        type: String,
        required: true,
      },
      student_class: {
        type: String,
        required: true,
      },
      student_group: {
        type: String,
        required: true,
      },
      teaching_days: {
        type: Number,
        required: true,
      },
      start_teachingMonth: {
        type: String,
        required: true,
      },
      area: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },  
      honorable: {
        type: Number,
        required: true,
      },
      teaching_experience: {
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
  },
);

const Tution = mongoose.model("Tution", tutionSchema);
export default Tution;
