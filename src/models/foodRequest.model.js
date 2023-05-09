import mongoose from "mongoose";

const requestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      requied: true,
    },
    role: {
      type: String,
      required: true,
    },
    foodName: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      requied: true,
    },
    cafeteria: {
      type: String,
      optional: true,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("foodrequest", requestSchema);
