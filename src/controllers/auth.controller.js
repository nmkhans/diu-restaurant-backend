import Auth from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//? register a user
export const register = async (req, res, next) => {
  try {
    const data = req.body;

    const checkExist = await Auth.findOne({ email: data.email });
    if (!checkExist) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const userData = {
        ...data,
        password: hashedPassword,
      };

      await Auth.create(userData);

      const user = await Auth.findOne(
        { email: data.email },
        { password: 0 }
      );

      const token = jwt.sign({ email: user.email }, "secret code", {
        expiresIn: "1h",
      });

      res.status(201).json({
        success: true,
        message: "User created successfully.",
        data: {
          user,
          token,
        },
      });
    } else {
      res.status(500).json({
        success: false,
        message: "User already exist!",
      });
    }
  } catch (error) {
    next(error);
  }
};
