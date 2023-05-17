const CategoryService = require("../services/CategoryService");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    res.status(error.code || 500).json({
      error: error.msg || "Something went wrong while fetching categories",
    });
  }
};

exports.getSubcategories = async (req, res) => {
  try {
    const categories = await CategoryService.getSubategories(req.query.name);
    return res.status(200).json(categories);
  } catch (error) {
    res.status(error.code || 500).json({
      error: error.msg || "Something went wrong while fetching categories",
    });
  }
};
