const {
  DataTypes: { INTEGER, STRING, TINYINT },
} = require("sequelize");
const sequelize = require("./index");

const GoodsProperty = sequelize.define("goods_property", {
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
  propertyNameId: {
    type: INTEGER,
    allowNull: false,
  },
  propertyValueId: {
    type: INTEGER,
    allowNull: false,
  },
});

GoodsProperty.associate = function ({ PropertyName, PropertyValue, Goods }) {
  GoodsProperty.belongsTo(PropertyName);
  GoodsProperty.belongsTo(PropertyValue);
  GoodsProperty.belongsTo(Goods);
};

module.exports = GoodsProperty;
