const ProductService = require("../services/ProductService");

exports.getProductList = async (req, res) => {
  try {
    const products = await ProductService.getAllProduct(req.query);
    res.status(200).json(products);
  } catch (err) {
    res.status(err.code || 500).json({
      error: err.msg || "Something went wrong while fetching products",
    });
  }
};
