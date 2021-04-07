const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

const sequelize = require("../utils/database");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email",
        },
      },
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/i,
          msg:
            "The password must contain at least 8 characters including one uppercase letter, one lowercase letter, one number and one special character.",
        },
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (user, options, cb) => {
        const hashedPassword = await bcrypt.hash(user.dataValues.password, 12);
        user.dataValues.password = hashedPassword;
      },
    },
  }
);

module.exports = User;
