const Sequelize = require("sequelize");
const db = require("../config/db");
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: "mysql",
  operatorAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 30000,
  },
  //解决中文输入问题
  define: {
    charset: "utf8",
    dialectOptions: {
      collate: "utf8_general_ci",
    },
  },
});

// 测试连接是否成功
sequelize
  .authenticate()
  .then(() => {
    console.info("数据库连接成功.");
  })
  .catch(err => {
    console.error("数据库连接失败.", err);
  });

module.exports = sequelize;
