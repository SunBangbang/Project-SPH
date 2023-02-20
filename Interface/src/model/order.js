const {
  DataTypes: { INTEGER, STRING },
} = require("sequelize");
const sequelize = require("./index");

const Order = sequelize.define("order", {
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
  traderNo: {
    type: STRING,
    allowNull: false,
  },
  consigneeTel: {
    type: STRING,
    allowNull: false,
  },
  consignee: {
    type: STRING,
    allowNull: false,
  },
  deliveryAddress: {
    type: STRING,
    allowNull: false,
  },
  paymentWay: {
    type: STRING,
    allowNull: false,
  },
  orderComment: {
    type: STRING,
    allowNull: false,
  },
});

Order.associate = function ({ Goods, User }) {
  Order.belongsTo(Goods);
  Order.belongsTo(User);
};

module.exports = Order;
