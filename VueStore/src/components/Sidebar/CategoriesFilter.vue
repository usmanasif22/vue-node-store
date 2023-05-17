<template>
  <div v-if="category" id="categoryFilter">
    <input
      id="certification-filter"
      type="text"
      placeholder="More Categories"
      v-model="categoryTextInput"
    />
    <p id="noCertificateFound" v-if="!filteredOptions.length">
      No Results Found
    </p>

    <div id="certification-list">
      <label id="mainCategory" @click="setCategory(category)">{{
        category
      }}</label>
      <label
        v-for="(doc, index) in filteredOptions"
        :key="index"
        id="categorylist"
        @click="setSubCategory(doc, category)"
        >{{ doc }}</label
      >
    </div>

    <div v-if="showCount < array.length">
      <p id="expand-certification" @click="showMore">
        Show All
      </p>
      <span id="expand-certification-span" @click="showMore">
        {{ array.length }}
      </span>
    </div>

    <p
      id="expand-certification"
      v-if="showCount === array.length && array.length !== 6"
      @click="showLess"
    >
      Show less
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showCount: 6,
      filteredOptions: [],
      categoryValue: "",
      categoryTextInput: "",
      array: []
    };
  },
  computed: {
    category() {
      return this.$store.state.filter.category;
    },
    handleInput() {
      this.filteredOptions = this.array.filter(option =>
        option.toLowerCase().includes(this.categoryTextInput.toLowerCase())
      );
      this.filteredOptions = this.filteredOptions.slice(0, this.showCount);
    }
  },
  methods: {
    showMore() {
      this.showCount = this.array.length;
    },
    showLess() {
      this.showCount = 6;
    },
    handleChange(event) {
      let subcategory = event.target.value;

      this.$store.dispatch("setFilter", { subcategory: subcategory });
    },
    getCategoryList() {
      this.axios
        .get(`http://localhost:8000/categories/list?name=${this.category}`)
        .then(async result => {
          this.array = await result.data[0].subcategories.map(doc => doc.name);
        })
        .catch(err => console.log(err));
    },
    setCategory(val) {
      console.log(this.category);
      this.$store.dispatch("setFilter", { category: val });
      this.$emit("closeDropdown", false);
    },
    setSubCategory(val1, val2) {
      this.$store.dispatch("setFilter", { subcategory: val1, category: val2 });
      this.$emit("closeDropdown", false);
    }
  },
  watch: {
    category() {
      this.getCategoryList();
    }
  },
  mounted() {
    this.handleInput;
  },
  beforeUpdate() {
    this.handleInput;
  }
};
</script>
<style scoped>
h4 {
  display: block;
  margin: 30px 10px 5px 10px;
  width: 200px;
  color: #12161c;
  font-weight: 400;
  font-size: 18px;
}
#noCertificateFound {
  text-align: center;
  color: red;
}
#certification-filter {
  outline: none;
  padding: 1px 15px;
  width: 240px;
  height: 36px;
  border: 1px solid #c2ccdd;
  border-radius: 20px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
}
#certification-filter::placeholder {
  text-align: center;
}
#certification label {
  color: #12161c;
  font-size: 15px;
  margin-left: 10px;
  cursor: pointer;
}
#certification-list {
  margin: 3px 20px;
  color: #12161c;
}
#expand-certification {
  text-decoration: underline;
  cursor: pointer;
  color: #4fb575;
  display: inline-block;
  margin-left: 20px;
  font-size: 15px;
}
#expand-certification-span {
  text-decoration: underline;
  cursor: pointer;
  color: #4fb575;
  margin: 0;
  font-size: 14px;
}
#expand-certification-span::before {
  content: "(";
}
#expand-certification-span::after {
  content: ")";
}
#categorylist {
  display: block;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
}
#categorylist:hover {
  color: #4fb575;
}
#mainCategory {
  color: #4fb575;
  font-size: 16px;
  font-weight: 600px;
  cursor: pointer;
}
</style>
