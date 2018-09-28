
const db = require('../models/index');
const User = require('../models/user')(db.sequelize, db.Sequelize);
const epilogue = require('../epilogue');
// Create REST resource
let userResource = epilogue.resource({
  model: User,
  endpoints: ['/users', '/users/:id'],
});
