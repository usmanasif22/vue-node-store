<template>
  <div id="sortingFilterConatiner">
    <div
      id="select-controls"
      @mouseenter="setShowSelectFilters(true)"
      @mouseleave="setShowSelectFilters(false)"
    >
      <input id="select-filters" :value="selectFilter" />
      <span>
        <img
          id="dropdownicon"
          src="https://thebuyhive.com/buy/img/chevronDown.e08abe09.svg"
          alt=""
        />
      </span>
      <div v-if="showSelectFilters" id="select-filters-dropdown">
        <ul>
          <li @click="setSelectFilter('Relevance')">Relevance</li>
          <li @click="setSelectFilter('Latest')">Latest</li>
          <li @click="setSelectFilter('Price Low to High')">
            Price Low to High
          </li>
          <li @click="setSelectFilter('Price High to Low')">
            Price High to Low
          </li>
          <li @click="setSelectFilter('MOQ Low to High')">MOQ Low to High</li>
          <li @click="setSelectFilter('Rating High to Low')">
            Rating High to Low
          </li>
        </ul>
      </div>
    </div>
    <PageButtons classname="page-buttons" />
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
      showSelectFilters: false,
      selectFilter: "Relevance"
    };
  },
  methods: {
    setShowSelectFilters(value) {
      this.showSelectFilters = value;
    },
    setSelectFilter(value) {
      this.selectFilter = value;
      this.$store.dispatch("setFilter", { sortby: value });
    }
  }
};
</script>

<style scoped>
#sortingFilterConatiner {
  display: flex;
  position: relative;
}
#select-controls {
  display: flex;
  z-index: 999;
  position: absolute;
  top: 20px;
  right: 225px;
}
#select-controls ul {
  width: 150px;
  list-style-type: none;
}
#select-controls li {
  cursor: pointer;
  margin: 5px 0px;
  font-weight: 500;
  font-size: 15px;
}
#select-controls li:hover {
  color: #4fb575;
}
#select-filters {
  background-color: #f2f2f2;
  height: 35px;
  width: 200px;
  border: 1px solid #c2ccdd;
  border-radius: 25px;
  padding: 5px 10px;
  font-size: 17px;
  padding-left: 20px;
  padding-top: 10px;
  position: absolute;
  right: 0px;
  top: 5px;
  outline: none;
}
#dropdownicon {
  position: absolute;
  right: 12px;
  top: 15px;
  width: 17px;
  height: 17px;
}
#select-filters-dropdown {
  position: relative;
  top: 47px;
  padding: 5px 15px;
  width: 200px;
  border: 1px solid #c2ccdd;
  border-radius: 7px;
  background-color: white;
}
</style>
