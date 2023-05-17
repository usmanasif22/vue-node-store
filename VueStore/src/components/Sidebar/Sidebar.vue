<template>
  <div class="sidebar">
    <CategoriesFilter :array="countries" />
    <PriceFilter />
    <MoqFilter />
    <CertificationsFilter
      name="Product Certification"
      placeholdertext="Product Certification..."
      :array="productsCertificates"
      filtername="certificate"
    />
    <CertificationsFilter
      name="Supplier Certification"
      placeholdertext="Supplier Certification..."
      :array="suppliersCertificates"
      filtername="supplier"
    />
    <CertificationsFilter
      name="Manufacturer Location"
      placeholdertext="Country/Region"
      :array="countries"
      filtername="country"
    />
    <StockInUSA />
  </div>
</template>

<script>
import PriceFilter from "./PriceFilter.vue";
import MoqFilter from "./MoqFilter.vue";
import CertificationsFilter from "./CertificationsFilter.vue";
import CategoriesFilter from "./CategoriesFilter.vue";
import StockInUSA from "./StockInUSA.vue";

export default {
  components: {
    PriceFilter,
    MoqFilter,
    CertificationsFilter,
    StockInUSA,
    CategoriesFilter
  },
  data() {
    return {
      productsCertificates: [
        "ASTM",
        "CE",
        "Certificate of Compliance",
        "Certificate of Conformity",
        "EN",
        "EPA",
        "FCC",
        "FDA",
        "GB",
        "Green Clean Certificate",
        "Intertek",
        "ISO 11439:2000",
        "ISO 11439:2013",
        "ROHS",
        "SGS"
      ],
      suppliersCertificates: [
        "DUNS",
        "DRS",
        "GMP",
        "ISO 13485",
        "ISO 9001",
        "ISO 9001:2015"
      ],
      countries: [
        "Australia",
        "Canada",
        "China",
        "Hong Kong",
        "India",
        "Korea",
        "United Kingdom",
        "United States",
        "Vitenam"
      ]
    };
  }
};
</script>

<style scoped>
.sidebar {
  border: 1px solid #c2ccdd;
  border-radius: 5px;
  height: max-content;
  width: 270px;
  padding: 30px 10px;
  position: relative;
  margin-bottom: 20px;
}
</style>
