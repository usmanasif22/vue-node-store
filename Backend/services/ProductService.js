const ProductHandler = require("../handlers/ProductHandler");
const query = require("../queries/ProductQueries");

exports.getAllProduct = async (queryBody) => {
  try {
    const {
      page,
      sortby,
      keyword,
      moq,
      minPrice,
      maxPrice,
      subcategory,
      category,
      country,
      certificate,
      stockInUsa,
      supplier,
    } = queryBody;

    let countryValues = country.split(",");
    if (!countryValues[0]) {
      countryValues = null;
    }
    let certificateValues = certificate.split(",");
    if (!certificateValues[0]) {
      certificateValues = null;
    }
    let supplierValues = supplier.split(",");
    if (!supplierValues[0]) {
      supplierValues = null;
    }
    let availInUsa;
    if (stockInUsa == "true") {
      availInUsa = true;
    } else availInUsa = null;

    const body = {
      page,
      sortby,
      keyword,
      moq,
      minPrice,
      maxPrice,
      subcategory,
      category,
      countryValues,
      certificateValues,
      supplierValues,
      availInUsa,
    };

    const data = await ProductHandler.getAllProduct(body);
    let store = {
      total: data.rows.length,
      products: data.rows,
    };

    if (sortby) {
      if (sortby === "Latest") {
        const sortId = (a, b) => {
          return b.id - a.id;
        };
        store.products = store.products.slice().sort(sortId);
      } else if (sortby === "Price Low to High") {
        const sortLTH = (a, b) => {
          return a.price - b.price;
        };
        store.products = store.products.slice().sort(sortLTH);
      } else if (sortby === "Price High to Low") {
        const sortHTL = (a, b) => {
          return b.price - a.price;
        };
        store.products = store.products.slice().sort(sortHTL);
      } else if (sortby === "MOQ Low to High") {
        const sortMOQ = (a, b) => {
          return a.moq - b.moq;
        };
        store.products = store.products.slice().sort(sortMOQ);
      } else if (sortby === "Rating High to Low") {
        const sortRating = (a, b) => {
          return b.rating - a.rating;
        };
        store.products = store.products.slice().sort(sortRating);
      }
    }

    if (page) {
      const startIndex = (page - 1) * 9;
      store.products = store.products.slice(startIndex, startIndex + 9);
    }

    return store;
  } catch (err) {
    console.log(err);
    throw new Error("Unable to get Products");
  }
};
