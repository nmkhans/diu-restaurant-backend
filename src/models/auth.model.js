import mongoose from "mongoose";

const authSchema = mongoose.Schema(
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
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    cafeteria: {
      type: String,
      default: null,
    },
    manager: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("auth", authSchema);
