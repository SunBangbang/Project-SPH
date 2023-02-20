const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const expressJwt = require("express-jwt");

const router = require("../router");
const { secret } = require("../utils/token");
const useInitData = require("../middleware/useInitData");

useInitData();

app.use(cors());

app.use("/", express.static(path.join(__dirname, "../public/")));
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

app.use(
  expressJwt
    .expressjwt({
      secret,
      algorithms: ["HS256"], // 加密算法
    })
    .unless({
      path: ["/", "/login", "/register", "/list"], //除了这个地址，其他的URL都需要验证
    })
);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    console.error(req.path + ",无效token");
    res.json({
      message: "token过期或者无效，请重新登录",
      code: 401,
      result: {},
    });
    return;
  }
  next();
});

app.use(router);

module.exports = app;
