const epilogue = require('epilogue');
const database = require('../models/index');
const User = require('../models/user')(database.sequelize, database.Sequelize);

const userResource = epilogue.resource({
  model: User,
  endpoints: ['/users', '/users/:id'],
});

module.exports = userResource;
