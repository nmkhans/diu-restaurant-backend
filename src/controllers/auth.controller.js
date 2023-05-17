import Auth from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//? register a user
export const register = async (req, res, next) => {
  try {
    const data = req.body;

    const checkExist = await Auth.findOne({ email: data.email });
    if (!checkExist) {
      const hashedPassword = await bcrypt.hash(data?.password, 10);
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

//? login a user
export const login = async (req, res, next) => {
  try {
    const data = req.body;

    const existUser = await Auth.findOne(
      { email: data.email },
      {
        email: 1,
        password: 1,
      }
    );

    if (existUser) {
      const matchPassword = await bcrypt.compare(
        data.password,
        existUser.password
      );

      if (matchPassword) {
        const user = await Auth.findOne(
          { email: existUser.email },
          { password: 0 }
        );

        const token = jwt.sign({ email: user.email }, "secret code", {
          expiresIn: "1h",
        });

        res.status(200).json({
          success: true,
          message: "Login successfull.",
          data: {
            user,
            token,
          },
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Password is incorrect!",
        });
      }
    } else {
      res.status(500).json({
        success: false,
        message: "No user found!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//? get all users
export const getAllUser = async (req, res, next) => {
  try {
    const result = await Auth.find({});

    res.status(200).json({
      success: true,
      message: "All user data",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//? promote to admin
export const promoteUserToAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Auth.updateOne(
      { _id: id },
      {
        $set: {
          role: "admin",
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "User updated.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//? promote to teacher
export const promoteToTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Auth.updateOne(
      { _id: id },
      {
        $set: {
          role: "teacher",
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "User updated.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//? promote to manager
export const promoteToManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cafeteria } = req.body;

    const result = await Auth.updateOne(
      { _id: id },
      {
        $set: {
          role: "manager",
          manager: true,
          cafeteria: cafeteria,
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "User updated.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//? get profile info
export const getProfileInfo = async (req, res, next) => {
  try {
    const { email } = req.params;

    const result = await Auth.findOne({ email: email });

    res.status(200).json({
      success: true,
      message: "Profile data",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//? update profile

export const updateProfile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedDoc = {
      $set: data,
    };

    const result = await Auth.updateOne({ _id: id }, updatedDoc);

    res.status(200).json({
      success: true,
      message: "Updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//? delete user
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Auth.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "User deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
