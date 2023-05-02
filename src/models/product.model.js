import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {},
  { versionKey: false, timestamp: true }
);

export default mongoose.model("product", productSchema);
