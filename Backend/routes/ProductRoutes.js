const express = require("express");
const router = express();
const ProductsControllers = require("../controllers/ProductController");

router.get("/", ProductsControllers.getProductList);

module.exports = router;
