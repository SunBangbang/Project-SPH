const {
  DataTypes: { INTEGER, STRING },
} = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define("user", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  phone: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
});

User.associate = function ({ Cart, Order }) {
  User.hasMany(Cart);
  User.hasMany(Order);
};

module.exports = User;
