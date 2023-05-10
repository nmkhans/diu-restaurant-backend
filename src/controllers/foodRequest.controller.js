import Request from "../models/foodRequest.model.js";

export const placeRequest = async (req, res, next) => {
  try {
    const data = req.body;

    const result = await Request.create(data);

    res.status(200).json({
      success: true,
      message: "Request placed",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const approveRequest = async (req, res, next) => {
  try {
    const { id, cafeteria } = req.query;

    const updatedDoc = {
      $set: {
        cafeteria: cafeteria,
        approved: true,
      },
    };

    const result = await Request.updateOne({ _id: id }, updatedDoc);

    res.status(200).json({
      success: true,
      message: "Request approved",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const declineRequest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Request.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Deleted",
      data: result,
    });
    
  } catch (error) {
    next(error);
  }
};

export const getRequestedFoodListForUser = async (req, res, next) => {
  try {
    const { email } = req.params;

    const result = await Request.find({ email: email });

    res.status(200).json({
      success: true,
      message: "Food list",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllRequestedFood = async (req, res, next) => {
  try {
    const result = await Request.find();

    res.status(200).json({
      success: true,
      message: "All requested food",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
