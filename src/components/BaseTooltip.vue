<template>
  <div class="relative">
    <div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <transition
      enter-active-classe="duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </transition>
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
