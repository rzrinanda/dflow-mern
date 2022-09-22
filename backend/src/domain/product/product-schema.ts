import { Schema } from "mongoose";
import mongoose from "mongoose";

export const Product = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  productName: String,
  productCode: String,
  productDesc: String,
});

const products = mongoose.model("products", Product);
export default products;
