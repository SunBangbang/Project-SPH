const {
  DataTypes: { INTEGER, STRING, TINYINT, BIGINT, TEXT },
} = require("sequelize");
const sequelize = require("./index");

const Goods = sequelize.define("goods", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  goods_name: {
    type: STRING,
    allowNull: false,
  },
  brandId: {
    type: INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: INTEGER,
    allowNull: false,
  },
  price: {
    type: BIGINT,
    allowNull: false,
  },
  original: {
    type: BIGINT,
    allowNull: false,
  },
  tags: {
    type: STRING,
    allowNull: false,
  },
  content: {
    type: TEXT,
    allowNull: false,
  },
  summary: {
    type: TEXT,
    allowNull: false,
  },
  is_sale: {
    type: TINYINT,
    defaultValue: 1,
  },
});

Goods.associate = function ({
  GoodsImages,
  GoodsProperty,
  Brand,
  Category,
  Cart,
  Order
}) {
  Goods.belongsTo(Brand);
  Goods.belongsTo(Category);
  Goods.hasMany(GoodsImages);
  Goods.hasMany(GoodsProperty);
  Goods.hasMany(Cart);
  Goods.hasMany(Order);
};

module.exports = Goods;
