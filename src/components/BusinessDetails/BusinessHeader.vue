<template>
  <div class="Header-wrapper">
    <div class="icon-wrapper" @click="goBack">
      <q-icon name="arrow_circle_left" class="Icon" />
      <i>Go Back</i>
    </div>
    <q-select
      standout="black text-white"
      v-model="model"
      :options="options"
      label="Quick action"
      class="input"
      bg-color="black"
      label-color="grey-3"
    />
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      model: null,
      options: ["Upload Document", " Query Document"],
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.Header-wrapper {
  display: flex;
  justify-content: space-between;
  height: 34px;
  margin: 36px 24px;
  cursor: pointer;
}
.icon-wrapper {
  display: flex;
}
.Icon {
  padding: 3px;
  margin-right: 3px;
  color: black;
  background-color: white;
}

.input {
  width: 160px;
  border: 1px solid #c6c6c6;
  border-radius: 8px !important;
}

@media (max-width: 768px) {
  .Header-wrapper {
    margin: 19px 17px;
  }
}
</style>
