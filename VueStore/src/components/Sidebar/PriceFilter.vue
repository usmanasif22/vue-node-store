<template>
  <div id="pricefiltercontainer">
    <h4>Price</h4>
    <div id="minPrice">
      <input
        id="price-filter"
        type="number"
        placeholder="from"
        v-model="minPriceInput"
        @input="handleMinPrice"
      />
      <span id="d1">$</span>
    </div>
    <span id="range">
      <hr />
    </span>
    <div id="maxPrice">
      <input
        id="price-filter"
        type="number"
        placeholder="to"
        v-model="maxPriceInput"
        @input="handleMaxPrice"
      />
      <span id="d2">$</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      minPriceInput: "",
      maxPriceInput: ""
    };
  },
  methods: {
    handleMinPrice() {
      this.$store.dispatch("setFilter", { minPrice: this.minPriceInput });
    },
    handleMaxPrice() {
      this.$store.dispatch("setFilter", { maxPrice: this.maxPriceInput });
    }
  }
};
</script>
<style scoped>
#pricefiltercontainer {
  display: inline-block;
  justify-content: center;
}
h4 {
  display: block;
  margin: 10px 10px 15px 10px;
  width: 200px;
  color: #12161c;
  font-weight: 400;
  font-size: 18px;
}
#minPrice {
  display: inline-block;
}
#maxPrice {
  display: inline-block;
}
#price-filter {
  width: 100px;
  outline: none;
  height: 35px;
  border: 1px solid #c2ccdd;
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 1px 20px;
  cursor: text;
  text-align: center;
}
#price-filter::placeholder {
  text-align: center;
}
#d1 {
  position: relative;
  right: 22px;
}
#d2 {
  position: relative;
  right: 22px;
}
#price-filter::-webkit-outer-spin-button,
#price-filter::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#range hr {
  display: inline-block;
  width: 10px;
  position: relative;
  bottom: 4px;
  right: 6px;
}
</style>
