<template>
  <div id="app">
    <Buy />
  </div>
</template>

<script>
import Buy from "./components/Buy.vue";
export default {
  name: "App",
  components: {
    Buy
  }
};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/80ef43d3685d74fc0e7ba8490cd6adc1?family=Avenir+LT+Pro);
* {
  font-family: "Avenir LT Pro", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
