const userService = require('../../services/userService');

exports.login = async (req, res, next) => {
  const user = await userService.checkUserCredentials({
    email: req.body.email,
    password: req.body.password,
  });

  if (!user) {
    return res.render('auth/login', { message: 'Email or password was wrong' });
  }

  req.session.user = user;
  res.redirect('/dashboard');
};

exports.logout = async (req, res, next) => {
  await req.session.destroy();
  res.redirect('/login');
};
