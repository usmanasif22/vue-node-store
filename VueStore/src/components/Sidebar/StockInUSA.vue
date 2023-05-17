<template>
  <div class="availinUSA">
    <h4>Stock Availability</h4>
    <input type="checkbox" id="stockinusa" value="" @change="handleChange" />
    <img
      id="flagofUSA"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
      alt="USA Flag"
    />
    <label for="stockinusa">In USA</label>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(event) {
      event.target.checked
        ? this.$store.dispatch("setFilter", { stockInUsa: true })
        : this.$store.dispatch("setFilter", { stockInUsa: "" });
    }
  }
};
</script>

<style scoped>
#flagofUSA {
  margin-left: 10px;
  width: 30px;
  height: 20px;
  position: relative;
  left: 5px;
  top: 3px;
}
h4 {
  display: block;
  margin: 30px 10px 5px 10px;
  width: 200px;
  color: #12161c;
  font-weight: 400;
  font-size: 18px;
}
.availinUSA label {
  margin-left: 10px;
  cursor: pointer;
}
#stockinusa {
  cursor: pointer;
}
</style>
