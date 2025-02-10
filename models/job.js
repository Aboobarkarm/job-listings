import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Full-time", "Part-Time", "Remote", "Internship"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  salary: {
    type: String,
    enum: [
      "Under $50k",
      "$50k - $60k",
      "$60k - $70k",
      "$70k - $80k",
      "$80k - $90k",
      "$90k - $100k",
      "$100k - $125k",
      "$125k - $150k",
      "$150k - $175k",
      "$175k - $200k",
      "Over $200k",
    ],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      default: null, 
    },
  },
}, { timestamps: true });

const Job = mongoose.model("Job", jobSchema);

export default Job;
