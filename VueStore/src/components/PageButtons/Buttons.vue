<template>
  <div id="buttoncontainer">
    <div :class="classname">
      <div id="back" @click="handlePageBack">
        <img
          src="https://thebuyhive.com/buy/img/chevronLeft.c50c4a36.svg"
          alt=""
        />
      </div>
      <div id="page-no">{{ page }}</div>
      <div id="total-pages">of {{ totalPages }}</div>
      <div id="forward" @click="handlePageForward">
        <img
          src="https://thebuyhive.com/buy/img/chevronRight.b3ce29d8.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["classname"],
  data() {
    return {};
  },
  computed: {
    page() {
      return this.$store.getters.getFilter.page;
    },
    totalPages() {
      return Math.ceil(this.$store.getters.getProductsCount / 9);
    }
  },
  methods: {
    handlePageBack() {
      if (this.page > 1 && this.page <= this.totalPages) {
        this.$store.dispatch("setFilter", { page: this.page - 1 });
      }
    },
    handlePageForward() {
      if (this.page > 0 && this.page < this.totalPages) {
        this.$store.dispatch("setFilter", { page: this.page + 1 });
      }
    }
  }
};
</script>
<style scoped>
#buttoncontainer {
  display: flex;
  position: absolute;
  align-items: center;
  right: 10px;
  top: 5px;
  height: 70px;
}
.page-buttons2 {
  display: flex;
  align-items: center;
  position: relative;
  top: 1220px;
  right: 20px;
  width: max-content;
  margin: 10px;
  height: 100px;
}
.page-buttons2 #back {
  position: relative;
  top: 7px;
  margin-right: 5px;
}
.page-buttons2 #forward {
  position: relative;
  top: 7px;
}
#back {
  display: inline-block;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 50px;
  width: 38px;
  height: 38px;
  cursor: pointer;
}
#back img {
  position: relative;
  top: 10px;
  left: 12px;
}
#page-no {
  display: inline-block;
  background-color: #f2f2f2;
  border: 1px solid #c2ccdd;
  border-radius: 20px;
  padding: 7px 25px;
  position: relative;
  top: 6px;
}
#total-pages {
  display: inline-block;
  position: relative;
  height: fit-content;
  width: fit-content;
  padding: 5px 10px;
  position: relative;
  top: 6px;
}
#forward {
  display: inline-block;
  margin-left: 5px;
  background-color: #f2f2f2;
  border-radius: 50px;
  width: 38px;
  height: 38px;
  cursor: pointer;
}
#forward img {
  position: relative;
  top: 10px;
  left: 12px;
}
</style>
