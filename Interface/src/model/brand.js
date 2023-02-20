const {
  DataTypes: { INTEGER, STRING },
} = require("sequelize");
const sequelize = require("./index");

const Brand = sequelize.define("brand", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  brand_name: {
    type: STRING,
    allowNull: false,
  },
  desc: {
    type: STRING,
  },
});

Brand.associate = function ({ Goods }) {
  Brand.hasMany(Goods);
};

module.exports = Brand;
