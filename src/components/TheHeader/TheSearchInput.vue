<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search"
      ref="input"
      :class="classes"
      v-model="searchQuery"
      @click="setState(true)"
      @focus="setState(true)"
      @blur="setState(false)"
      @keyup.esc="hendleEsc"
    />
    <button
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
      v-show="query"
      @click="searchQuery = ''"
    >
      <BaseIcon name="x" class="w-5 h5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";
export default {
  inheritAttrs: false,
  components: {
    BaseIcon,
  },
  props: ["query", "has-results"],
  emits: ["update:query", "change-state"],
  data() {
    return {
      isActive: false,
      classes: [
        "w-full",
        "h-full",
        "px-3",
        "shadow-inner",
        "rounded-bl-sm",
        "rounded-tl-sm",
        "border",
        "border-gray-300",
        "focus:border-blue-700",
        "focus:outline-none",
      ],
    };
  },
  computed: {
    searchQuery: {
      get() {
        return this.query;
      },
      set(searchQuery) {
        this.$emit("update:query", searchQuery);
        this.setState(this.isActive);
      },
    },
  },
  methods: {
    setState(isActive) {
      this.isActive = isActive;
      this.$emit("change-state", isActive);
    },
    hendleEsc() {
      this.removeSelection();

      this.isActive && this.hasResults
        ? this.setState(false)
        : this.$refs.input.blur();
    },
    removeSelection() {
      const end = this.$refs.input.value.length;

      this.$refs.input.setSelectionRange(end, end);
    },
  },
};
</script>

<style></style>
