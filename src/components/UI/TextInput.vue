<template>
  <q-select
    outlined
    v-model="model"
    :options="options"
    :label="label"
    class="input"
  />
</template>

<script>
import { ref, defineProps } from "vue";

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "All time",
    },
  },
  setup() {
    const props = defineProps(["options"]);
    const model = ref(null);

    return {
      model,
      ...props,
    };
  },
};
</script>

<style scoped>
.input {
  border-radius: 5px;
}
</style>
