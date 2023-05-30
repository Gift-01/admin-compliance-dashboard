<template>
  <div>
    <div>
        <p>Go Back</p>
    </div>
    <h1>Business details Page</h1>
  </div>
</template>

<script>
import Button from "../components/UI/BaseButton.vue"
export default {
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

<style lang="scss" scoped></style>
