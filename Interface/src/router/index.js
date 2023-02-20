const express = require("express");
const router = express.Router();

const {
  login,
  register,
  getCart,
  addCart,
  addOrder,
  getOrder,
  delCart,
} = require("../controller/basic");
const { search, productDetail, getAll } = require("../controller/product");

router.post("/login", login);

router.post("/register", register);

router.get("/search", search);
router.get("/list", getAll);
router.get("/list/item/:id", productDetail);

router.get("/cart", getCart);
router.post("/cart", addCart);
router.delete("/cart", delCart);

router.post("/order", addOrder);
router.get("/order", getOrder);

module.exports = router;
