const basicLogger = (req, res, next) => {
  console.log(`Basic Logger: ${req.method} request for '${req.url}'`);
  next();
};

export default basicLogger;
