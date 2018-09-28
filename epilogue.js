const epilogue = require('epilogue');
const app = require('./app');
const database = require('./models/index');

epilogue.initialize({
  app:app,
  sequelize: database.sequelize,
});

database.sequelize.sync({ force: true });

module.exports = epilogue;
