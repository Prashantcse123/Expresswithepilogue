const userResource = require('../epilogue/initResource');

module.exports.create = (req, res) => {
  userResource.controllers.create({ firstName: req.firstName, lastName: req.lastName, email: req.email });
  res
};
