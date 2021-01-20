const express = require('express');
const authController = require('../controllers/auth/authController');
const authValidator = require('../validator/auth');
const signedInMiddleware = require('../middleware/signedIn');


const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => {
  res.render('auth/login', { title: 'Login page' });
});

router.post('/login', authValidator.postLogin, authController.login);

router.get('/dashboard', signedInMiddleware, (req, res, next) => {
  res.render('dashboard', { title: 'Admin dashboard' });
});

router.get('/logout', signedInMiddleware, authController.logout);

//register 
router.get('/register',)

router.post('/register',)

module.exports = router;
