<template>
  <div class="card_container" :style="{ background: backgroundColor }">
    <div class="card_content">
      <p>{{ heading }}</p>
      <h3>{{ total }}</h3>
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
  height: 8rem;
  justify-content: space-between;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top: 1.5rem;
  border-radius: 8px;
}
.card_container img {
  width: 5rem;
  margin-top: 1.5rem;
}
.card_content {
  display: flex;
  padding-left: 1rem;
}
h3 {
  font-size: 1.5rem;
  color: rgba(23, 23, 23, 1);
  transform: translateX(-5rem);
}
p {
  color: rgba(102, 102, 102, 1);
  font-size: 0.8rem;
}
</style>
