<template>
  <div>
    <div id="header">
      <div id="openCategory">
        <button @click="setOpen(!openSubcategories)">
          <img :src="BoxMenu" alt="menu" />
          <span>Categories</span>
        </button>
      </div>

      <div id="search">
        <input
          type="text"
          placeholder="What are you looking for?"
          v-model="searchInput"
        />
        <select id="selectCategory" v-model="category">
          <option selected value="">All Categories</option>
          <option v-for="(doc, index) in categories" :key="index">{{
            doc.name
          }}</option>
        </select>
      </div>
      <div id="submit">
        <button id="search-button" @click="handleSubmit()">
          Search
        </button>
      </div>
    </div>
    <Subcategories
      v-if="openSubcategories"
      :data="categories"
      v-on:closeDropdown="setOpen($event)"
    />
  </div>
</template>

<script>
import BoxMenuIcon from "../../assets/boxMenu.png";
import Subcategories from "./Subcategories.vue";
export default {
  components: {
    Subcategories
  },
  data() {
    return {
      BoxMenu: BoxMenuIcon,
      categories: [],
      openSubcategories: false,
      searchInput: "",
      category: ""
    };
  },
  computed: {},
  methods: {
    getCategories() {
      this.axios
        .get("http://localhost:8000/categories")
        .then(result => {
          this.categories = result.data;
        })
        .catch(err => console.log(err));
    },
    setOpen(val) {
      this.openSubcategories = val;
    },
    handleSubmit() {
      this.$store.dispatch("setFilter", { keyword: this.searchInput });
      this.$store.dispatch("setFilter", { category: this.category });
    }
  },
  mounted() {
    this.getCategories();
  }
};
</script>

<style scoped>
#header {
  display: flex;
  border: 1px solid rgb(255, 255, 255);
  padding: 16px 0px;
  padding-left: 18px;
  background-color: #f2f2f2;
  border-radius: 8px;
  height: 75px;
}
#openCategory button {
  border: none;
  height: 40px;
  width: 140px;
  cursor: pointer;
  background-color: #f2f2f2;
}
#openCategory button img {
  border: none;
  cursor: pointer;
  position: relative;
  top: 2px;
}
#openCategory span {
  position: relative;
  bottom: 10px;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  margin-left: 5px;
}
#openCategory button:hover {
  cursor: pointer;
  border: none;
  border-radius: 30px;
  background-color: #ffffff;
}
#search {
  display: flex;
  width: 1000px;
  height: 40px;
  margin-left: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #cdd5e2;
  outline: none;
}
#search input {
  padding-left: 20px;
  width: 740px;
  background-color: #ffffff;
  color: #07080a;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  outline: none;
  caret-color: #050505;
}
#search input::placeholder {
  color: #a3a9b3;
}
#search select {
  width: 240px;
  border: none;
  padding: 10px;
  border-left: 1px solid #cdd5e2;
  background-color: #ffffff;
  font-size: 15px;
  outline: none;
}
#submit button {
  background-color: #55b3c9;
  height: 40px;
  width: 120px;
  margin-left: 15px;
  border-radius: 20px;
  font-size: 1em;
  border: none;
  color: #ffffff;
  cursor: pointer;
}
</style>
