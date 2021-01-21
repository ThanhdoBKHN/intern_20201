const userService = require('../../services/userService');
// import { conn } from '../../util/dbConfig'
// const dbConfig = require('../../util/dbConfig')
// const conn = dbConfig.conn
// import _ from 'lodash'
// import bcrypt from 'bcrypt'

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

exports.register = async (req, res, next) => {
  
}

// exports.register = async (req, res, next) => {
//   let sql = "SELECT * FROM user WHERE email='"+req.body.email+"' "
//   console.log('sql', sql )
//   let query = conn.query(sql, async(err, results ) => {
//     if(err) throw err
//     if(results.length > 0 )
//     {
//       res.send(JSON.stringify({"status": 302, "error": "User is found with enail"}))
//       return
//     }
//     req.body.password = await bcrypt.hash(req.body.password, 12)
//     console.log("password: ", req.body.password);
//     let data = {username: req.body.username, email: req.body.email, password: req.body.password}
//     let sql = "INSERT INTO user SET ?"
//     let query = conn.query(sql,data, (err, results)=>{
//       if(err) throw err
//       res.send(JSON.stringify({"status":200, "error": null, "response": results}))
//     })
//   })
// };