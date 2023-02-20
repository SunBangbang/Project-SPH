const service = require("../service/product");

class Controller {
  async search(req, res) {
    try {
      const info = await service.search(req.query);
      res.json(info);
    } catch (err) {
      res.json({ code: 500, message: "服务器错误", result: {} });
    }
  }

  async productDetail(req, res) {
    try {
      const info = await service.productDetail(req.query.id);
      res.json(info);
    } catch (err) {
      res.json({ code: 500, message: "服务器错误", result: {} });
    }
  }

  async getAll(req, res) {
    try {
      const info = await service.getAll(req.query);
      res.json(info);
    } catch (err) {
      res.json({ code: 500, message: "服务器错误", result: {} });
    }
  }
}

module.exports = new Controller();
