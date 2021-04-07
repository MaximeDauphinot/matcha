const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postNewUser = async (req, res, next) => {
  const { firstName, lastName, email, login, password } = req.body;
  const errObj = {};

  try {
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      login: login,
      password: password,
    });

    res.status(200).json({
      message: "User succesfully created !",
      status: 200,
    });
  } catch (err) {
    err.errors.map((er) => {
      errObj[er.path] = er.message;
    });

    //Check if there's no double
    if (err.name === "SequelizeUniqueConstraintError") {
      if (errObj["users.email"] || errObj["users.login"])
        res.status(409).json({
          status: 409,
          message: errObj["users.email"]
            ? "Email is already taken"
            : "Login is already taken",
        });
      //Check if it's valid data
    } else if (err.name === "SequelizeValidationError") {
      if (errObj["email"] || errObj["password"])
        res.status(422).json({
          status: 422,
          message: errObj["email"] ? errObj["email"] : errObj["password"],
        });
    } else {
      next(err);
    }
  }
};

// exports.getLogin = (req, res, next) => {
//   res.send({
//     token: req.session.csrfToken,
//     isLoggedIn: req.session.isLoggedIn,
//   });
// };

exports.postLogin = async (req, res, next) => {
  const { login, password } = req.body;

  try {
    const [{ dataValues }] = await User.findAll({
      where: {
        login: login,
      },
    });

    const doMatch = await bcrypt.compare(password, dataValues.password);

    if (doMatch) {
      return res.send({ message: "All good :D" });
    } else {
      return res.send({ message: "Wrong password" });
    }
  } catch (err) {
    console.log(err);
    return res.send({ message: "No user found" });
  }
};

// exports.postLogin = (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   User.findOne({ email: email })
//     .then((user) => {
//       if (!user) {
//         return res.send({ message: "* No user found" });
//       }
//       bcrypt
//         .compare(password, user.password)
//         .then((doMatch) => {
//           if (doMatch) {
//             req.session.isLoggedIn = true;
//             req.session.user = user;
//             return req.session.save((err) => {
//               res.cookie("isLoggedIn", req.session.csrfToken, {
//                 secure: false,
//                 httpOnly: false,
//                 maxAge: req.session.expiration,
//               });
//               res.send({ token: req.session.csrfToken, message: "ok" });
//               // console.log(err);
//             });
//           }
//           return res.send({ message: "* Invalid email or password" });
//         })
//         .catch((err) => console.log(err));
//     })
//     .catch((err) => console.log(err));
// };

// exports.getLogout = (req, res, next) => {
//   res.send({
//     token: req.session.csrfToken,
//     prenom: req.user.prenom,
//     nom: req.user.nom,
//   });
// };

// exports.postLogout = (req, res, next) => {
//   req.session.destroy((err) => {
//     if (err) console.log(err);
//   });
//   res.cookie("isLoggedIn", false, {
//     secure: false,
//     httpOnly: false,
//     maxAge: 0 * 1000,
//   });
//   res.send({ message: "logged Out" });
// };
