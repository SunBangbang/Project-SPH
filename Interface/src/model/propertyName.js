const {
  DataTypes: { INTEGER, STRING, TINYINT },
} = require("sequelize");
const sequelize = require("./index");

const PropertyName = sequelize.define("property_name", {
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
  categoryId: {
    type: INTEGER,
    allowNull: false,
  },
  is_allow_alias: {
    type: TINYINT,
    defaultValue: 0,
  },
  is_color: {
    type: TINYINT,
    defaultValue: 0,
  },
  is_enum: {
    type: TINYINT,
    defaultValue: 0,
  },
  is_input: {
    type: TINYINT,
    defaultValue: 0,
  },
  is_key: {
    type: TINYINT,
    defaultValue: 0,
  },
  is_sale: {
    type: TINYINT,
    defaultValue: 0,
  },
  is_search: {
    type: TINYINT,
    defaultValue: 0,
  },
  is_must: {
    type: TINYINT,
    defaultValue: 0,
  },
  is_multi: {
    type: TINYINT,
    defaultValue: 0,
  },
  status: {
    type: TINYINT,
    defaultValue: 1,
  },
});

PropertyName.associate = function ({
  GoodsProperty,
  PropertyValue,
  Category,
}) {
  PropertyName.belongsTo(Category);
  PropertyName.hasMany(GoodsProperty);
  PropertyName.hasMany(PropertyValue);
};

module.exports = PropertyName;
