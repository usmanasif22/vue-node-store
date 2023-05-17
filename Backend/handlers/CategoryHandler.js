const query = require("../queries/CategoryQueries");
const pool = require("../database/databasepg");

exports.getAllCategories = async () => {
  return await pool.query(query.getAllCategories);
};

exports.getSubcategories = async (value) => {
  return await pool.query(query.getSubcategories, [`%${value}%`]);
};
