// Save signed in user data to locals data
const getSignedInUser = (req, res, next) => {
  req.app.locals.user = req.session.user;
  next();
};

// Auto generate crsf token
const generateCsrf = (req, res, next) => {
  req.app.locals.crsfToken = req.csrfToken();
  next();
};

module.exports = [generateCsrf, getSignedInUser];
