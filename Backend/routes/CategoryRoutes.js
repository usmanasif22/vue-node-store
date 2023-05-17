const express = require("express");
const router = express();
const CategoriesControllers = require("../controllers/CategoryController");

router.get("/", CategoriesControllers.getAllCategories);
router.get("/list", CategoriesControllers.getSubcategories);

module.exports = router;
