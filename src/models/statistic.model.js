import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    cafeteria: {
      type: String,
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("statistic", schema);
