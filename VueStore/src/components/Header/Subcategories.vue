<template>
  <div id="dropdown-container">
    <div
      id="dropdown-category-list"
      v-for="item in data"
      :key="item.id"
      @click="setMainCategory(item.name)"
    >
      <span>{{ item.name }}</span>
      <div id="subcategoriesConatiner">
        <div
          id="subcategory-list"
          v-for="doc in item.subcategories"
          :key="doc.id"
          @click="setSubcategory(doc.name, item.name)"
        >
          {{ doc.name }}
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    setMainCategory(val) {
      this.$store.dispatch("setFilter", { category: val });
      this.$emit("closeDropdown", false);
    },
    setSubcategory(val1, val2) {
      this.$store.dispatch("setFilter", { subcategory: val1, category: val2 });
      this.$emit("closeDropdown", false);
    }
  }
};
</script>
<style scoped>
#dropdown-container {
  border-radius: 7px;
  background-color: #f2f2f2;
  height: 410px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  z-index: 1000;
}
#dropdown-container::-webkit-scrollbar {
  height: 8px;
}
#dropdown-container::-webkit-scrollbar-thumb {
  border-radius: 2px;
  width: 40px;
  background-color: #4fb575;
}
#dropdown-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(231, 226, 226);
  width: 20px;
}
#dropdown-category-list {
  flex: 0 0 auto;
  padding: 15px;
  margin-right: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
}
#dropdown-category-list span:hover {
  color: #4fb575;
}
#subcategoriesConatiner {
  font-size: 12px;
  margin-top: 5px;
  font-weight: 400;
  line-height: 15px;
}
#subcategory-list {
  margin-bottom: 5px;
}
#subcategory-list:hover {
  color: #4fb575;
  cursor: pointer;
}
</style>
