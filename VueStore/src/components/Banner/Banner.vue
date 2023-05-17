<template>
  <div>
    <div id="products-details">
      <div id="products-count">
        <h3>Products</h3>
        <p>{{ totalProducts }} Products</p>
      </div>
      <div id="products-path">
        <p><span>Buy</span></p>
      </div>
      <div id="banner">
        <p class="bannertext">
          Placing bulk orders on BuyHive is safe & easy.
        </p>
        <h4 class="bannertext">Click to learn how it works!</h4>
      </div>
    </div>
    <Sorting />
  </div>
</template>

<script>
import Sorting from "./Sorting.vue";
export default {
  components: {
    Sorting
  },
  data() {
    return {};
  },
  computed: {
    totalProducts() {
      return this.$store.getters.getProductsCount;
    }
  }
};
</script>

<style scoped>
#products-details {
  display: flex;
  margin-top: 30px;
  max-width: 1400px;
}
#products-count {
  max-width: 350px;
  padding-left: 10px;
}
#products-count h3 {
  display: inline-block;
}
#products-count p {
  display: inline-block;
  margin-left: 18px;
  color: #c2ccdd;
  font-size: 1.2em;
  font-weight: 600;
}
#products-count p::before {
  content: "(";
}
#products-count p::after {
  content: ")";
}
#products-path {
  display: inline-block;
  margin-left: 150px;
  padding-top: 5px;
}
#products-path p {
  text-decoration: none;
  display: inline-block;
  color: #4fb575;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
}
#products-path p span {
  color: #c2ccdd;
}
#banner {
  background: rgb(29, 170, 199);
  background: linear-gradient(
    90deg,
    rgba(29, 170, 199, 1) 15%,
    rgba(3, 207, 253, 1) 50%,
    rgba(144, 141, 201, 1) 87%
  );
  width: 420px;
  padding: 10px 40px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  left: 510px;
  top: 10px;
}
.bannertext {
  color: #ffffff;
}
</style>
