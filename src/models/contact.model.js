import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { versionKey: false, timestamp: true }
);

export default mongoose.model("contact", schema);
