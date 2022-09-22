import { Schema } from "mongoose";
import mongoose from "mongoose";

export const Customer = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  email: {
    type: String,
    required: [true, "Please enter Email Address"],
    unique: true,
    lowercase: true,
  },
  password: String,
  username: {
    type: String,
    required: [true, "Please enter Username"],
    unique: true,
  },
  fullName: String,
});

const customers = mongoose.model("customers", Customer);
export default customers;
