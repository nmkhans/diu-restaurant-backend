import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//? routes import
import errorHandler from "./src/middlewares/error.handler.js";
import defaultRoute from "./src/routes/default.route.js";
import productRoute from "./src/routes/product.route.js";
import authRoute from "./src/routes/auth.route.js";
import orderRoute from "./src/routes/order.route.js";
import paymentRoute from "./src/routes/payment.route.js";
import statusRoute from "./src/routes/status.route.js";
import requestRoute from "./src/routes/foodRequest.route.js";
import contactRoute from "./src/routes/contact.route.js";
import statisticRoute from "./src/routes/statistic.route.js";

//? app configuration
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

//? database configuration
const uri = process.env.DB_URI;
const databaseConfig = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
};

//? database connection
mongoose.set("strictQuery", true);
mongoose
  .connect(uri, databaseConfig)
  .then(() => console.log("database connected"));

//? handle routes
app.use("/api/v1", defaultRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/status", statusRoute);
app.use("/api/v1/food-request", requestRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/statistic", statisticRoute);

//? handle undefined routes
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route was not found!",
  });
});

//? handle general error
app.use(errorHandler);

export default app;
