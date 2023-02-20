const {
  DataTypes: { INTEGER, STRING },
} = require("sequelize");
const sequelize = require("./index");

const Cart = sequelize.define("cart", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  goodId: {
    type: INTEGER,
    allowNull: false,
  },
  count: {
    type: INTEGER,
    allowNull: false,
  },
});

Cart.associate = function ({ Goods, User }) {
  Cart.belongsTo(Goods);
  Cart.belongsTo(User);
};

module.exports = Cart;
