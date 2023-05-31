<template>
  <div class="container">
    <BusinessHeader />
    <BusinessDescription />
    <BusinessTabs/>
  </div>
</template>

<script>
import BusinessHeader from "src/components/BusinessDetails/BusinessHeader.vue";
import BusinessDescription from "src/components/BusinessDetails/BusinessDescription.vue";
import BusinessTabs from "src/components/BusinessDetails/BusinessTabs.vue";

export default {
  components: { BusinessHeader, BusinessDescription, BusinessTabs },
  mounted() {
    this.getid();
  },
  methods: {
    getid() {
      console.log(this.$route);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #fbfbfb;
  min-height: 100vh;
}
</style>
