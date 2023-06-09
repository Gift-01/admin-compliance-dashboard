<template>
  <div class="input">
    <div class="q-gutter-md">
      <q-select
        :rounded="rounded"
        outlined
        v-model="model"
        :options="options"
        :label="label"
      />
    </div>
  </div>
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
    rounded: {
      type: String,
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

<style scoped></style>
