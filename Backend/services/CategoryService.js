const CategoryHandler = require("../handlers/CategoryHandler");

exports.getAllCategories = async () => {
  try {
    const result = await CategoryHandler.getAllCategories();
    if (!result.rows.length) {
      throw new Error("Unable to get Categories");
    }
    const data = result.rows;
    const array = [...new Set(data.map((doc) => doc.categories))];
    const newarr = [];
    array.map((doc, i) => {
      var obj = {
        id: i,
        name: doc,
        subcategories: [],
      };
      newarr.push(obj);
    });
    data.map((doc) => {
      var index = newarr.findIndex((item) => item.name === doc.categories);
      newarr[index].subcategories.push({
        id: doc.subcategoryid,
        name: doc.subcategories,
      });
    });
    return newarr;
  } catch (err) {
    console.log(err);
    throw new Error("Unable to get Categories");
  }
};

exports.getSubategories = async (queryValue) => {
  try {
    const result = await CategoryHandler.getSubcategories(queryValue);
    if (!result.rows.length) {
      throw new Error("Unable to get Categories");
    }
    const data = result.rows;
    const array = [...new Set(data.map((doc) => doc.categories))];
    const newarr = [];
    array.map((doc) => {
      var obj = {
        name: doc,
        subcategories: [],
      };
      newarr.push(obj);
    });
    data.map((doc) => {
      var index = newarr.findIndex((item) => item.name === doc.categories);
      newarr[index].subcategories.push({
        id: doc.subcategoryid,
        name: doc.subcategories,
      });
    });
    return newarr;
  } catch (err) {
    console.log(err);
    throw new Error("Unable to get Categories");
  }
};
