<template>
  <li>
    <a
      href="#"
      class="flex flex-col items-center px-2 py-5 hover:bg-gray-100"
      :class="isActive ? 'text-red-500' : ''"
    >
      <BaseIcon class="w-6 h-6 mb-1.5" :name="icon" />
      <span class="text-xs">{{ title }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";
export default {
  props: {
    icon: String,
    title: {
      type: String,
      default: "Title",
    },
    isActive: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    BaseIcon,
  },
};
</script>

<style></style>
