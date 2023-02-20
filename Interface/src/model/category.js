const {
  DataTypes: { INTEGER, STRING },
} = require("sequelize");
const sequelize = require("./index");

const Category = sequelize.define("category", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  cate_name: {
    type: STRING,
    allowNull: false,
  },
  pid: {
    type: INTEGER,
    allowNull: false,
  },
});

Category.associate = function ({ Goods, PropertyName }) {
  Category.hasMany(Goods);
  Category.hasMany(PropertyName);
};

module.exports = Category;
