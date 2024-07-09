const checkAuth = (req, res, next) => {
  const isLoggedIn = true; // Replace with real authentication check
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).send("Unauthorized Access!");
  }
};

export default checkAuth;
