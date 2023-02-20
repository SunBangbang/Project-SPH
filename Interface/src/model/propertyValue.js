const {
  DataTypes: { INTEGER, STRING, TINYINT },
} = require("sequelize");
const sequelize = require("./index");

const PropertyValue = sequelize.define("property_value", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  propertyNameId: {
    type: INTEGER,
    allowNull: false,
  },
  status: {
    type: TINYINT,
    defaultValue: 1,
  },
});

PropertyValue.associate = function ({ GoodsProperty, PropertyName }) {
  PropertyValue.belongsTo(PropertyName);
  PropertyValue.hasMany(GoodsProperty);
};

module.exports = PropertyValue;
