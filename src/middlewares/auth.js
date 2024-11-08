const adminAuth = (req, res, next) => {
  console.log("Admin authorization is checking");
  const token = "abc";
  const isAuthorized = token === "abc";

  if (isAuthorized) {
    next();
  } else res.status(401).send("Authentication failed");
};

const userAuth = (req, res, next) => {
  console.log("User authorization is checking");
  const token = "xyz";
  const isAuthorized = token === "xyz";

  if (isAuthorized) {
    next();
  } else res.status(401).send("User Auth failed");
};

module.exports = {
  adminAuth,
  userAuth,
};
