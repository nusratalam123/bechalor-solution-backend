import mongoose from "mongoose";
import validator from "validator";

const tutionBookingSchema = new mongoose.Schema(
  {
    tution_Id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    teacher_Img: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    university_name: {
      type: String,
      required: true,
    },
    university_year: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    university_IDimg: {
      type: String,
      required: true,
    },
    university_result: {
      type: String,
      required: true,
    },
    college_name: {
      type: String,
      required: true,
    },
    hsc_passedYear: {
      type: String,
      required: true,
    },
    hsc_group: {
      type: String,
      required: true,
    },
    hsc_result: {
      type: String,
      required: true,
    },
    hsc_resultImg: {
      type: String,
      required: true,
    },
    school_name: {
      type: String,
      required: true,
    },
    ssc_passedYear: {
      type: String,
      required: true,
    },
    ssc_group: {
      type: String,
      required: true,
    },
    ssc_result: {
      type: String,
      required: true,
    },
    ssc_resultImg: {
      type: String,
      required: true,
    },
    present_address: {
      type: String,
      required: true,
    },
    parmanent_address: {
      type: String,
      required: true,
    },
    teacher_NIDImg: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    teacher_dateOfBirthImg: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    pepherable_area: {
      type: String,
      required: true,
    },
    teaching_experience: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const tutionBooked = mongoose.model("TutionBooked", tutionBookingSchema);
export default tutionBooked;
