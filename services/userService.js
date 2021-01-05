const bcrypt = require('bcrypt');
const { User } = require('../models/index'); // all deu extend to index in model 

exports.checkUserCredentials = async function (data) {
  const candidateUser = await User.findOne({
    where: {
      email: data.email,
    },
  });

  if (!candidateUser) {
    return false;
  }

  if (!bcrypt.compareSync(data.password, candidateUser.password)) {
    return false;
  }

  return candidateUser;
};
