const sequelize = require("../model/index");

const {
  brands,
  categorys,
  propertyNames,
  propertyValues,
  goods,
  goodsPropertys,
  goodsImages,
  users,
  carts,
  orders,
} = require("../data");

const Brand = require("../model/brand");
const Category = require("../model/category");
const Goods = require("../model/goods");
const GoodsImages = require("../model/goodsImages");
const GoodsProperty = require("../model/goodsProperty");
const PropertyName = require("../model/propertyName");
const PropertyValue = require("../model/propertyValue");
const User = require("../model/user");
const Cart = require("../model/cart");
const Order = require("../model/order");

module.exports = async () => {
  await sequelize.sync({ force: true });

  User.associate({ Cart, Order });
  Brand.associate({ Goods });
  Category.associate({
    Goods,
    PropertyName,
  });

  Goods.associate({
    GoodsImages,
    GoodsProperty,
    Brand,
    Category,
    Cart,
    Order,
  });

  GoodsImages.associate({
    Goods,
  });

  GoodsProperty.associate({
    PropertyName,
    PropertyValue,
    Goods,
  });

  PropertyName.associate({
    GoodsProperty,
    PropertyValue,
    Category,
  });
  PropertyValue.associate({
    GoodsProperty,
    PropertyName,
  });
  Cart.associate({
    Goods,
    User,
  });
  Order.associate({
    Goods,
    User,
  });

  try {
    await User.bulkCreate(users);
    await Brand.bulkCreate(brands);
    await Category.bulkCreate(categorys);
    await Goods.bulkCreate(goods);
    await PropertyName.bulkCreate(propertyNames);
    await PropertyValue.bulkCreate(propertyValues);
    await GoodsProperty.bulkCreate(goodsPropertys);
    await GoodsImages.bulkCreate(goodsImages);
    await Cart.bulkCreate(carts);
    await Order.bulkCreate(orders);
  } catch (err) {
    console.error(err);
  }
};
