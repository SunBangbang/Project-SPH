const {
  DataTypes: { INTEGER, STRING, TINYINT, BIGINT, TEXT },
} = require("sequelize");
const sequelize = require("./index");

const GoodsImages = sequelize.define("goods_images", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  goodId: {
    type: INTEGER,
    allowNull: false,
  },
  link: {
    type: STRING,
  },
});

GoodsImages.associate = function ({ Goods }) {
  GoodsImages.belongsTo(Goods);
};

module.exports = GoodsImages;
