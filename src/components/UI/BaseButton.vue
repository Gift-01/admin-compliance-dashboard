<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      :label="label"
      :icon="icon"
      :color="color"
      :size="size"
      :dense="dense"
      :outline="outline"
      :round="round"
      :flat="flat"
      :disable="disabled"
      @click="handleClick"
    >
      <slot></slot>
    </q-btn>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "md",
    },
    dense: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
};
</script>
