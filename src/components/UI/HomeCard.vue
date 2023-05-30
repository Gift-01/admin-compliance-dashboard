<template>
  <div class="card_container" :style="{ background: backgroundColor }">
    <div class="card_content">
      <h6>{{ heading }}</h6>
      <h4>{{ total }}</h4>
    </div>
    <img :src="imageSource" alt="" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeCard",

  props: {
    heading: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    imageSource: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.card_container {
  width: 30%;
  display: flex;
  flex-direction: row;
  height: 13rem;
  justify-content: space-between;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.card_container img {
  width: 8rem;
  margin-top: 1.5rem;
}
.card_content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 1rem;
}
</style>
