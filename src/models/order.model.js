import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
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
    role: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    transactionId: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("order", orderSchema);
