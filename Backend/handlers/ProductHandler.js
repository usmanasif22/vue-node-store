const pool = require("../database/databasepg");
const query = require("../queries/ProductQueries");

exports.getAllProduct = async (value) => {
  return await pool.query(query.getAllProducts, [
    `%${value.keyword}%`,
    parseInt(value.moq) || null,
    parseInt(value.minPrice) || null,
    parseInt(value.maxPrice) || null,
    `%${value.subcategory}%`,
    value.countryValues,
    value.certificateValues,
    value.availInUsa,
    `%${value.category}%`,
    value.supplierValues,
  ]);
};
