//to show error of routes instead of cannot get/ ...
const notFound = (req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
      console.log("hello");
    });
  }
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  //next middleware
  next(error);
};

//middleware
//eslint-disable-no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
