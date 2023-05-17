<template>
  <div id="home">
    <Navbar />
    <Header />
    <Banner />
    <ProductsList />
    <Sidebar />
  </div>
</template>

<script>
import Navbar from "./Navbar/Navbar.vue";
import Header from "./Header/Header.vue";
import Banner from "./Banner/Banner.vue";
import Sidebar from "./Sidebar/Sidebar.vue";
import ProductsList from "./Products/ProductsList.vue";
import PageButtons from "./PageButtons/Buttons.vue";
export default {
  components: {
    Navbar,
    Header,
    Banner,
    Sidebar,
    ProductsList,
    PageButtons
  }
};
</script>
<style scoped>
#home {
  width: 1330px;
  margin: 0 auto;
}
</style>
