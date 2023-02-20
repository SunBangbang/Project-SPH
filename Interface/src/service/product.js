const goodsModel = require("../model/goods");
const categoryModel = require("../model/category");
const brandModel = require("../model/brand");
const goodsPropertyModel = require("../model/goodsProperty");
const propertyNameModel = require("../model/propertyName");
const propertyValueModel = require("../model/propertyValue");
const goodsImagesModel = require("../model/goodsImages");
const { Op } = require("sequelize");

class Service {
  async search({
    cate_id = null,
    keyword = "",
    order = "",
    pageNo = 1,
    pageSize = 10,
    props = "",
    brand_id = null,
  }) {
    try {
      if (!keyword && props) {
        const list = await propertyValueModel.findAll({
          offset: (parseInt(pageNo) - 1) * parseInt(pageSize),
          limit: parseInt(pageSize),
          order: order ? [["price", String(order).toUpperCase(order)]] : null,
          where: {
            title: {
              [Op.in]: props.split(","),
            },
          },
          include: [
            {
              model: goodsPropertyModel,
              include: [
                {
                  model: goodsModel,
                  include: [
                    {
                      model: goodsImagesModel,
                    },
                    {
                      model: brandModel,
                    },
                    {
                      model: categoryModel,
                    },
                  ],
                },
              ],
            },
          ],
        });

        return {
          code: 200,
          message: "ok",
          result: list,
        };
      }

      const ps = {};
      if (props) {
        const arr = props.split(",");
        ps.title = {
          [Op.in]: arr,
        };
      }
      const list = await goodsModel.findAll({
        offset: (parseInt(pageNo) - 1) * parseInt(pageSize),
        limit: parseInt(pageSize),
        order: order ? [["price", String(order).toUpperCase(order)]] : null,
        where: {
          [Op.or]: [
            {
              categoryId: cate_id,
            },
            {
              brandId: brand_id,
            },
            {
              goods_name: {
                [Op.like]: `%${keyword}%`,
              },
            },
          ],
        },
        include: [
          {
            model: categoryModel,
          },
          {
            model: brandModel,
          },
          {
            model: goodsPropertyModel,
            include: [
              {
                model: propertyNameModel,
                // include: [
                //   {
                //     model: propertyValueModel,
                //   },
                // ],
              },
              {
                model: propertyValueModel,
                where: ps,
              },
            ],
          },
          {
            model: goodsImagesModel,
          },
        ],
      });
      return {
        code: 200,
        message: "ok",
        result: list,
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async productDetail(id) {
    try {
      const info = await goodsModel.findOne({
        where: {
          id,
        },
        include: [
          {
            model: categoryModel,
          },
          {
            model: brandModel,
          },
          {
            model: goodsImagesModel,
          },
          {
            model: goodsPropertyModel,
            include: [
              {
                model: propertyNameModel,
              },
              {
                model: propertyValueModel,
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

  async getAll({ pageNo = 1, pageSize = 10 }) {
    try {
      const list = await goodsModel.findAll({
        offset: (parseInt(pageNo) - 1) * parseInt(pageSize),
        limit: parseInt(pageSize),
        include: [
          {
            model: categoryModel,
          },
          {
            model: brandModel,
          },
          {
            model: goodsPropertyModel,
            include: [
              {
                model: propertyNameModel,
              },
              {
                model: propertyValueModel,
              },
            ],
          },
          {
            model: goodsImagesModel,
          },
        ],
      });
      return {
        code: 200,
        message: "ok",
        result: list,
      };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}

module.exports = new Service();
