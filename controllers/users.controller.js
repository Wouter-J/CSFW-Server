const User = require("../models/Users");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  //Create
  Register: ({ body }, res, next) => {
    console.log("Server register called");
    const userProps = {
      Username: body.Username,
      Firstname: body.Firstname,
      Lastname: body.Lastname,
      Password: body.Password,
      Role: "User"
    };
    User.create(userProps, (err, data) => {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
  },
  //Read All
  Index: (req, res, next) => {
    User.find((error, data) => {
      if (error) {
        return next(error);
      }
      res.json(data);
    });
  },
  //Read One
  Read(req, res, next) {
    const UserID = req.params.id;  
    User.findById(UserID)
      .orFail(() => Error("User not found"))
      .then(user => res.send(user))
      .catch(next);
  },
  //Update
  Edit: ({ body: { Username, Firstname, Lastname }, params: { id } }, res,next ) => {
    User.findByIdAndUpdate(id, { Username, Firstname, Lastname })
      .orFail(() => Error("User not found"))
      .then(user => res.status(200).json(user))
      .catch(next);
  },
  //Login
  Login: ({ body: { Username, Password } }, res, next) => {
    //Get user from DB
    User.findOne({  Username, Password }, (err, data) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (!data) {
        res
          .status(401)
          .json({
            message:
              "Authentication failed! User and / or password is incorrect"
          });
        return;
      }
      const token = jwt.sign({ Username }, process.env.secretToken, {
        expiresIn: "24h"
      }); //Token duration is 24h

      res.json({
        success: true,
        message: "Auth successful",
        id: data._id,
        token
      });
    }).catch(next);
  }
};
