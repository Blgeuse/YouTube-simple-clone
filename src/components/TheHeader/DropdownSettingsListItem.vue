<template>
  <li>
    <a
      @click.prevent
      href="#"
      class="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
    >
      <BaseIcon
        v-if="isIconShown"
        :name="iconName"
        class="w-5 h-5 mr-3 text-gray-400"
      />
      <span :class="['trancate', 'flex-1', { 'ml-8': icon && !isIconShown }]">
        {{ label }}
      </span>
      <BaseIcon
        v-if="withSubMenu"
        name="chevronRight"
        class="w-5 h-5 text-gray-400 ml-auto"
      />
    </a>
  </li>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";

export default {
  props: {
    active: Boolean,
    label: String,
    icon: {
      type: String,
      default: "check",
    },
    withSubMenu: Boolean,
  },
  computed: {
    isIconShown() {
      return this.active || (this.icon !== "check" && this.icon !== null);
    },
    iconName() {
      return this.active ? "check" : this.icon;
    },
  },
  components: {
    BaseIcon,
  },
};
</script>

<style></style>
