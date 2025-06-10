const createError = require("http-errors");


// 404 error handler
const notFoundErrorHandler = (req, res, next) => {
  next(createError(404, "Not Found the route"));
};


// 500 error handler
const InternalServerErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

// default error handler
const errorHandler = (err, req, res, next) => {
    res.render("error", { title: "Error", error: err });
}

module.exports = {
  notFoundErrorHandler,
  InternalServerErrorHandler,
  errorHandler,
};
