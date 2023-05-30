<template>
  <q-page class="landing_page">
    <MainDashboard />
  </q-page>
</template>

<script>
import MainDashboard from "src/layouts/MainDashboard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingPage",

  components: {
    MainDashboard,
  },
});
</script>

<style scoped></style>
