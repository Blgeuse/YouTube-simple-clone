<template>
  <span :class="classes" @mouseenter="toggleBadge" @mouseleave="toggleBadge">
    <BaseIcon :name="icon" class="w-5 h-5" />
    <span :class="badgeClasses"
      ><span class="inline-block my-1.5 mx-3">{{ label }}</span></span
    >
  </span>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  props: {
    icon: String,
    label: String,
  },
  data() {
    return {
      isBadgeShow: false,
    };
  },
  methods: {
    toggleBadge() {
      this.isBadgeShow = !this.isBadgeShow;
    },
  },
  computed: {
    classes() {
      return [
        this.isBadgeShow ? "rounded-r-sm" : "rounded-sm",
        "opacity-0",
        "group-hover:opacity-100",
        "bg-opacity-60",
        "absolute",
        "right-0",
        "bg-black",
        "text-white",
        "m-1",
        "p-1",
      ];
    },
    badgeClasses() {
      return [
        this.isBadgeShow ? "w-28" : "w-0",
        "absolute",
        "transition-width",
        "bg-black",
        "bg-opacity-60",
        "whitespace-nowrap",
        "top-0",
        "right-full",
        "overflow-hidden",
        "uppercase",
        "text-xs",
        "delay-100",
        "font-semibold",
        "rounded-l-sm",
      ];
    },
  },
};
</script>

<style></style>
