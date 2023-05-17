<template>
  <div id="certification">
    <h4>{{ name }}</h4>

    <input
      id="certification-filter"
      type="text"
      :placeholder="placeholdertext"
      v-model="certificateTextInput"
    />
    <br />

    <p id="noCertificateFound" v-if="!filteredOptions.length">
      No Results Found
    </p>

    <div
      id="certification-list"
      v-for="(doc, index) in filteredOptions"
      :key="index"
    >
      <input type="checkbox" :id="doc" :value="doc" @change="handleChange" />
      <label :for="doc">{{ doc }}</label>
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
  props: ["name", "placeholdertext", "array", "filtername"],
  data() {
    return {
      showCount: 6,
      filteredOptions: [],
      certificateTextInput: "",
      selectedCheckboxes: []
    };
  },
  methods: {
    showMore() {
      this.showCount = this.array.length;
    },
    showLess() {
      this.showCount = 6;
    },
    handleChange(event) {
      let checkboxValue = event.target.value;

      if (event.target.checked) {
        this.selectedCheckboxes = [...this.selectedCheckboxes, checkboxValue];
      } else {
        this.selectedCheckboxes = this.selectedCheckboxes.filter(
          value => value !== checkboxValue
        );
      }
      let object = {
        [this.filtername]: this.selectedCheckboxes
      };
      this.$store.dispatch("setFilter", object);
    }
  },
  computed: {
    handleInput() {
      this.filteredOptions = this.array.filter(option =>
        option.toLowerCase().includes(this.certificateTextInput.toLowerCase())
      );
      this.filteredOptions = this.filteredOptions.slice(0, this.showCount);
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
#certification {
  display: block;
}
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
  cursor: pointer;
  color: #12161c;
  font-size: 15px;
  margin-left: 10px;
}
#certification-list {
  margin: 3px 10px;
  color: #12161c;
}
#expand-certification {
  text-decoration: underline;
  cursor: pointer;
  color: #4fb575;
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
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
</style>
