const { body, validationResult } = require('express-validator');

exports.postLogin = [
  body('email').isEmail(),
  body('password').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('auth/login', { err: errors.errors });
    }

    next();
  },
];

exports.postRegister = [
  body('email').isEmail(),
  body('password').not().isEmpty(),
  body('repeatpassword').not().isEmpty(),
  body('tel').isNumeric(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('auth/logup', { err: errors.errors });
    }

    next();
  },
]
