const db = require('../models/index');
const userModel = require('../models/user')(db.sequelize, db.Sequelize);

module.exports.create = (req, res) => {
  const body = req.body;
  db.sequelize.sync()
    .then(() => userModel.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    }))
    .then((result) => {
      console.log(result.toJSON());
      res.status(200).send('Done');
    });
};