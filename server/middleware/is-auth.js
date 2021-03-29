module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.cookie("connect.sid", false, {
      secure: false,
      httpOnly: false,
      maxAge: 0,
    });
  }
  next();
};
