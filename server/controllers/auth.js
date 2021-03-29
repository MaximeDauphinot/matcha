const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postNewUser = async (req, res, next) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const login = req.body.login;
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  try {
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      login: login,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User succesfully saved !",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      throw new Error("Something went wrong");
    }
    next(err);
  }
};

// exports.postNewUser = (req, res, next) => {
//   const nom = req.body.nom;
//   const prenom = req.body.prenom;
//   const email = req.body.email;
//   const password = req.body.password;
//   const confirmPassword = req.body.confirmPassword;
//   User.findOne({ email: email })
//     .then((userDoc) => {
//       if (userDoc) {
//         return res.send({ message: "Email already exist" });
//       }
//       if (confirmPassword !== password) {
//         return res.send({ message: "Passwords are not the same" });
//       }
//       return bcrypt
//         .hash(password, 12)
//         .then((hashedPassword) => {
//           const user = new User({
//             nom: nom,
//             prenom: prenom,
//             email: email,
//             password: hashedPassword,
//           });
//           return user.save();
//         })
//         .then((result) => res.send({ message: "User Saved !" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.getLogin = (req, res, next) => {
//   res.send({
//     token: req.session.csrfToken,
//     isLoggedIn: req.session.isLoggedIn,
//   });
// };

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
