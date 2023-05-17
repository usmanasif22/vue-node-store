<template>
  <div id="moqContainer">
    <h4>MOQ</h4>
    <input
      id="moq-filter"
      type="number"
      placeholder="less than"
      v-model="moqInput"
      @input="handleMoq"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      moqInput: ""
    };
  },
  methods: {
    handleMoq() {
      this.$store.dispatch("setFilter", { moq: this.moqInput });
    }
  }
};
</script>
<style scoped>
#moqContainer {
  margin: 30px 0px;
}
h4 {
  display: block;
  margin: 15px 10px;
  width: 200px;
  color: #12161c;
  font-weight: 400;
  font-size: 18px;
}
#moq-filter {
  width: 240px;
  outline: none;
  padding: 1px 15px;
  height: 36px;
  border: 1px solid #c2ccdd;
  border-radius: 20px;
  background-color: #f2f2f2;
  text-align: center;
}
#moq-filter::placeholder {
  text-align: center;
}
#moq-filter::-webkit-outer-spin-button,
#moq-filter::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
