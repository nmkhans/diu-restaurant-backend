const errorHandler = (error, req, res, next) => {
  console.log(error);

  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: error.message,
  });
};

export default errorHandler;
