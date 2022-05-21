<template>
  <div class="relative">
    <div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <div v-show="isShown" :class="classes">{{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },
  props: { text: String },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
  },
  computed: {
    classes() {
      return [
        "bg-gray-600",
        "bg-opacity-80",
        "rounded-sm",
        "text-white",
        "text-xs",
        "whitespace-nowrap",
        "p-2",
        "absolute",
        "top-14",
        "left-1/2",
        "transform",
        "-translate-x-1/2",
      ];
    },
  },
};
</script>

<style></style>
