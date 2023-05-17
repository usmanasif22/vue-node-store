import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: {
      items: [],
      totalProducts: 0
    },
    filter: {
      page: 1,
      sortby: "",
      subcategory: "",
      keyword: "",
      moq: "",
      minPrice: "",
      maxPrice: "",
      country: "",
      certificate: "",
      supplier: "",
      stockInUsa: "",
      category: ""
    }
  },
  getters: {
    getProducts: state => {
      return state.products.items;
    },
    getProductsCount: state => {
      return state.products.totalProducts;
    },
    getFilter: state => {
      return state.filter;
    }
  },
  mutations: {
    setProducts(state, payload) {
      state.products.items = payload;
    },
    setTotalProducts(state, payload) {
      state.products.totalProducts = payload;
    },
    setFilter(state, payload) {
      if (Object.keys(payload).includes("category")) {
        const myNewObject = {
          ...Object.keys(state.filter).reduce(
            (acc, key) => ({ ...acc, [key]: "" }),
            {}
          ),
          ...payload
        };
        state.filter = myNewObject;
        state.filter.page = 1;
      } else if (Object.keys(payload).includes("subcategory")) {
        const myNewObject = {
          ...Object.keys(state.filter).reduce(
            (acc, key) => ({ ...acc, [key]: "" }),
            {}
          ),
          ...payload
        };
        state.filter = myNewObject;
        state.filter.page = 1;
      }
      state.filter = { ...state.filter, ...payload };
    }
  },
  actions: {
    setProducts(context, payload) {
      context.commit("setProducts", payload);
    },
    setTotalProducts(context, payload) {
      context.commit("setTotalProducts", payload);
    },
    setFilter(context, payload) {
      context.commit("setFilter", payload);
    }
  }
});
