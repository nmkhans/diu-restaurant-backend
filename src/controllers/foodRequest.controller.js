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
