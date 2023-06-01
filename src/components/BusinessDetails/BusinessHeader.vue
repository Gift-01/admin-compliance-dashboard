<template>
  <div class="Header-wrapper">
    <div class="icon-wrapper">
      <q-icon name="arrow_circle_left" class="Icon" />
      <i>Go Back</i>
    </div>
    <my-select
      :options="selectOptions"
      class="Input"
      label="Quick Action"
      bg-color="black"
      label-color="grey-3"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import MySelect from "src/components/UI/TextInput";

export default {
  components: { MySelect },

  data() {
    return {
      selectOptions: ["Upload Document", "Query Document"],
    };
  },
};
</script>

<style lang="scss" scoped>
.Header-wrapper {
  display: flex;
  justify-content: space-between;
  height: 34px;
  margin: 36px 24px;
}
.icon-wrapper {
  display: flex;
}
.Icon {
  padding: 3px;
  margin-right: 3px;
}

.Input {
  width: 155px;
  height: 34px !important;
  gap: 10px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .Header-wrapper {
    margin: 19px 17px;
  }
}
</style>
