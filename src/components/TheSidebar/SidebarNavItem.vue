<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="icon" :class="iconClasses" class="w-6 h-6 mr-6" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";

export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    label: String,
    icon: String,
  },
  components: {
    BaseIcon,
  },
  computed: {
    classes() {
      const classes = ["flex", "items-center", "px-6", "py-2", "text-sm"];

      return this.isActive
        ? [
            ...classes,
            "font-medium",
            "text-gray-800",
            "bg-gray-200",
            "hover:bg-gray-300",
          ]
        : [...classes, "hover:bg-gray-100"];
    },
    iconClasses() {
      return this.isActive ? "text-red-500" : "";
    },
  },
};
</script>

<style></style>
