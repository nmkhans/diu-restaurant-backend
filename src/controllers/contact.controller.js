import Contact from "../models/contact.model.js";

export const createContactReq = async (req, res, next) => {
  try {
    const data = req.body;

    const result = await Contact.create(data);

    res.status(200).json({
      success: true,
      message: "Submitted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getContactMessage = async (req, res, next) => {
  try {
    const data = await Contact.find({});

    res.status(200).json({
      success: true,
      message: "All contact message",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteContactMessage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Contact.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Message Deleted.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
