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

<style lang="scss" scoped>
.card_container {
  width: 30%;
  display: flex;
  flex-direction: row;
  height: 8rem;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 1.5rem;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 760px) {
    justify-content: space-evenly;
  }
}

.card_container img {
  width: 5rem;

  @media screen and (max-width: 760px) {
    display: none;
  }
}
.card_content {
  display: flex;
  padding-left: 1rem;
  @media screen and (max-width: 760px) {
    padding-left: 1.5rem;

  }
 
  }
 

h3 {
  font-size: 1.5rem;
  color: rgba(23, 23, 23, 1);
  transform: translateX(-5rem);
  padding-top: 1rem;
  @media screen and (max-width: 760px) {
    transform: translateX(-2rem);
    padding-top: 2.5rem;
  }
}
p {
  color: rgba(102, 102, 102, 1);
  font-size: 0.8rem;
  padding-top: 1rem;
}
</style>
