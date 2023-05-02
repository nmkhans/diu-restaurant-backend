import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

//? define port
const port = process.env.PORT || 9000;

//? listening to port
app.listen(port, () => {
  console.log("listening to port", port);
});

//? handle unexpected error
process.on("unhandlededRejection", (error) => {
  console.log(error);
  app.close(() => {
    process.exit(1);
  });
});
