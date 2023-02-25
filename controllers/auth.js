const User = require('../models/user');
const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

exports.signup = async (req, res) => {
     try {
          const user = new User(req.body);

          await User.insertMany(user);

          res.send({
               status: 201,
               success: true,
               msg: 'User added successfully',
          });
     } catch (error) {
          res.send({
               status: 400,
               success: false,
               msg: error.message,
          });
     }
};

exports.signin = async (req, res) => {
     try {
          const { email, password } = req.body;

          User.findOne({ email }, (err, user) => {
               if (err || !user) {
                    return res
                         .status(401)
                         .json({ error: 'USER email does not exist' });
               }
          });

          if (!user.autheticate(password)) {
               return res
                    .status(401)
                    .json({ error: 'Email and Password do not match' });
          }
     } catch (error) {
          res.send({ status: 401, success: false, msg: error.message });
     }
};

exports.signout = (req, res) => {
     res.clearCookie('token');
     res.json({
          message: 'User signout successfully',
     });
};

//protected routes
exports.isSignedIn = expressJwt({
     secret: process.env.SECRET,
     userProperty: 'auth',
});

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
     let checker = req.profile && req.auth && req.profile._id == req.auth._id;
     if (!checker) {
          return res.status(403).json({
               error: 'ACCESS DENIED',
          });
     }
     next();
};

exports.isAdmin = (req, res, next) => {
     if (req.profile.role === 0) {
          return res.status(403).json({
               error: 'You are not ADMIN, Access denied',
          });
     }
     next();
};

// module.exports = {
//      signup,
// };

// Silence movie - monoj bajpayee : thriller
// /State of Siege: Temple Attack
