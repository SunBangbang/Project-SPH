const service = require("../service/basic");

class Controller {
  async login(req, res) {
    try {
      const info = await service.login(req.body);
      res.json(info);
    } catch (err) {
      res.json({
        code: 500,
        message: "服务器错误",
        result: {},
      });
    }
  }

  async register(req, res) {
    try {
      const info = await service.register(req.body);
      res.json(info);
    } catch (err) {
      res.json({
        code: 500,
        message: "服务器错误",
        result: {},
      });
    }
  }

  async getCart(req, res) {
    try {
      const info = await service.getCart({ userId: req.auth.id, ...req.query });
      res.json(info);
    } catch (err) {
      res.json({
        code: 500,
        message: "服务器错误",
        result: {},
      });
    }
  }

  async addCart(req, res) {
    try {
      const info = await service.addCart({ userId: req.auth.id, ...req.body });
      res.json(info);
    } catch (err) {
      res.json({
        code: 500,
        message: "服务器错误",
        result: {},
      });
    }
  }

  async addOrder(req, res) {
    try {
      const info = await service.addOrder({
        userId: req.auth.id,
        ...req.body,
      });
      res.json(info);
    } catch (err) {
      res.json({
        code: 500,
        message: "服务器错误",
        result: {},
      });
    }
  }

  async getOrder(req, res) {
    try {
      const info = await service.getOrder({
        userId: req.auth.id,
        ...req.query,
      });
      res.json(info);
    } catch (err) {
      res.json({
        code: 500,
        message: "服务器错误",
        result: {},
      });
    }
  }

  async delCart(req, res) {
    try {
      const info = await service.delCart({
        userId: req.auth.id,
        ...req.body
      });
      res.json(info);
    } catch (err) {
      res.json({
        code: 500,
        message: "服务器错误",
        result: {},
      });
    }
  }
}

module.exports = new Controller();
