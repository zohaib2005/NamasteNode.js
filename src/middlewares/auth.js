const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked!!!");
  const token = "xyz";
  const isAdminAUthorized = token === "xyz";
  if (!isAdminAUthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth is getting checked!!!");
  const token = "xyz";
  const isAdminAUthorized = token === "xyz";
  if (!isAdminAUthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};