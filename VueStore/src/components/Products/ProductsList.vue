<template>
  <div class="products-list">
    <div v-if="!productsCount" id="loading">No Products Found</div>

    <div v-for="doc in products" :key="doc.id" class="product-box">
      <div id="product-image">
        <img :src="doc.images[0]" alt="productImage" />
      </div>
      <div id="product-desc">
        <div id="product-in-usa">
          <img
            v-show="doc.stockinusa"
            id="flagofUSA1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
            alt="USA Flag"
          />
          <label v-show="doc.stockinusa">Stock In USA</label>
        </div>
        <p id="product-name">{{ doc.name }}</p>
        <p id="product-moq">
          MOQ:
          <span>
            {{ doc.moq }}
          </span>
          <span> {{ doc.unit }}s </span>
        </p>
        <h3>
          <span>$</span>
          {{ doc.price | twoDigits }}
          <span>
            /<span id="unit">{{ doc.unit }}</span>
          </span>
        </h3>
      </div>
      <button id="addToCart">Add to Cart</button>
    </div>
    <PageButtons classname="page-buttons2" />
  </div>
</template>
<script>
import PageButtons from "../PageButtons/Buttons.vue";
export default {
  components: {
    PageButtons
  },
  data() {
    return {
      filters: []
    };
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    filtersArray() {
      this.filters = this.$store.getters.getFilter;
    },
    fetchProducts() {
      this.axios
        .get(
          `http://localhost:8000/products/?page=${this.filters.page}&sortby=${this.filters.sortby}&subcategory=${this.filters.subcategory}&keyword=${this.filters.keyword}&moq=${this.filters.moq}&minPrice=${this.filters.minPrice}&maxPrice=${this.filters.maxPrice}&country=${this.filters.country}&certificate=${this.filters.certificate}&supplier=${this.filters.supplier}&stockInUsa=${this.filters.stockInUsa}&category=${this.filters.category}`
        )
        .then(async result => {
          let reponse = await result.data;
          this.$store.dispatch("setProducts", reponse.products);
          this.$store.dispatch("setTotalProducts", reponse.total);
        })
        .catch(err => console.log(err));
    },
    productsCount() {
      return this.$store.getters.getProductsCount;
    }
  },
  filters: {
    twoDigits(value) {
      return value.toFixed(2);
    }
  },
  watch: {
    filtersArray: function(newVal) {},
    fetchProducts: function(newVal) {}
  }
};
</script>

<style scoped>
.products-list {
  display: grid;
  gap: 0px;
  grid-template-columns: repeat(3, 1fr);
  height: 1000px;
  width: 1040px;
  float: right;
  position: relative;
  left: 20px;
  top: 80px;
}
.product-box {
  width: 300px;
  height: 380px;
  padding: 10px 10px;
  margin: 20px 0px;
  cursor: pointer;
}
.product-box:hover {
  box-shadow: 0 0 9px rgb(129, 124, 124);
}
#product-desc {
  height: 100px;
}
#product-image img {
  width: 250px;
  height: 200px;
  margin: 0 auto;
}
#product-in-usa {
  height: 30px;
}
#flagofUSA1 {
  width: 30px;
  height: 20px;
  position: relative;
  left: 5px;
  top: 3px;
}
#product-in-usa label {
  font-size: 12px;
  margin-left: 10px;
}
#product-desc h3 {
  padding: 5px 0px;
  font-size: 15px;
  font-weight: 600;
  color: #181818;
}
#product-desc h3 span {
  padding: 10px 0px;
  font-size: 15px;
  font-weight: 600;
  color: #000000;
}
#unit {
  margin-left: 10px;
}
#product-moq {
  color: #828385;
  font-size: 14px;
  font-weight: 500;
}
#product-name {
  font-weight: bold;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
  color: #181818;
}
#addToCart {
  background-color: #55b3c9;
  color: white;
  width: 270px;
  height: 30px;
  border: none;
  border-radius: 10px;
  position: relative;
  visibility: hidden;
  top: 20px;
  cursor: pointer;
}
.product-box:hover #addToCart {
  visibility: visible;
}
#loading {
  font-size: larger;
  position: relative;
  top: 10px;
  left: 50px;
  font-weight: 600;
  color: rgb(34, 28, 28);
  height: 50px;
  width: 200px;
  border: 2px solid rgb(255, 187, 0);
  box-shadow: inset 0 0 10px rgb(255, 187, 0);
  background-color: #fff2f2;
  color: rgba(219, 23, 23, 0.761);
  text-align: center;
  padding-top: 10px;
}
</style>
