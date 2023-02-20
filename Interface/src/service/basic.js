const uuid = require("uuid");

const userModel = require("../model/user");
const cartModel = require("../model/cart");
const goodsModel = require("../model/goods");
const goodsImagesModel = require("../model/goodsImages");
const orderModel = require("../model/order");

const { setToken } = require("../utils/token");

class Service {
  async login({ phone, password }) {
    try {
      const account = await userModel.findOne({
        where: {
          phone,
        },
      });
      if (!account) {
        return {
          code: 400,
          message: "账号不存在",
          result: {},
        };
      }
      if (account.password !== password) {
        return {
          code: 400,
          message: "密码错误",
          result: {},
        };
      }
      const token = setToken({ id: account.dataValues.id }, "1h");
      return {
        code: 200,
        message: "登录成功",
        result: { ...account.dataValues, token },
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async register({ phone, password }) {
    try {
      const account = await userModel.findOne({
        where: {
          phone,
        },
      });
      if (account) {
        return {
          code: 400,
          message: "账号已存在",
          result: {},
        };
      }
      await userModel.create({ phone, password });
      return {
        code: 200,
        message: "注册成功",
        result: {},
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async getCart({ userId, pageNo = 1, pageSize = 10 }) {
    try {
      const info = await cartModel.findAll({
        offset: (parseInt(pageNo) - 1) * parseInt(pageSize),
        limit: parseInt(pageSize),
        where: {
          userId,
        },
        include: [
          {
            model: goodsModel,
            include: [
              {
                model: goodsImagesModel,
              },
            ],
          },
        ],
      });
      return {
        code: 200,
        message: "ok",
        result: info,
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async addCart({ userId, goodId, count }) {
    try {
      await cartModel.create({
        userId,
        goodId,
        count,
      });
      return {
        code: 200,
        message: "ok",
        result: {},
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async addOrder({
    userId,
    consigneeTel,
    consignee,
    deliveryAddress,
    paymentWay,
    orderComment,
    orderDetailList,
  }) {
    try {
      const traderNo = uuid.v1();
      for (let i = 0; i < orderDetailList.length; i++) {
        await orderModel.create({
          userId,
          traderNo,
          consigneeTel,
          consignee,
          deliveryAddress,
          paymentWay,
          orderComment,
          goodId: orderDetailList[i],
        });
      }
      return {
        code: 200,
        message: "ok",
        result: traderNo,
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async getOrder({ userId, pageNo = 1, pageSize = 10 }) {
    try {
      const info = await orderModel.findAll({
        offset: (parseInt(pageNo) - 1) * parseInt(pageSize),
        limit: parseInt(pageSize),
        where: {
          userId,
        },
        include: [
          {
            model: goodsModel,
          },
        ],
      });
      return {
        code: 200,
        message: "ok",
        result: info,
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async delCart({ userId, cartId }) {
    try {
      await cartModel.destroy({
        where: {
          userId,
          cartId,
        },
      });
      return {
        code: 200,
        message: "ok",
        result: info,
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}

module.exports = new Service();
