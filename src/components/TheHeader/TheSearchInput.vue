<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search"
      ref="input"
      :class="classes"
      v-model="searchQuery"
      @click.stop="setState(true)"
      @focus="setState(true)"
      @keyup.esc="hendleEsc"
      @keydown.enter="handleEnter"
    />
    <button
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
      v-show="query"
      @click="clear"
    >
      <BaseIcon name="x" class="w-5 h5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  props: ["query", "has-results"],
  emits: ["update:query", "change-state", "enter"],
  inject: ["isMobileSearchActive"],
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
  watch: {
    "isMobileSearchActive.value"(isMobileSearchActive) {
      if (isMobileSearchActive) {
        this.$nextTick(() => this.$refs.input.focus());
      }
    },
  },
  mounted() {
    if (window.innerWidth < 640) {
      this.$refs.input.focus();
    }
    document.addEventListener("keydown", this.onKeydonw);
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
    handleEnter() {
      this.setState(false);

      this.$refs.input.blur();

      this.$emit("enter");
    },
    removeSelection() {
      const end = this.$refs.input.value.length;

      this.$refs.input.setSelectionRange(end, end);
    },
    onKeydonw(event) {
      const isInputFocused = this.$refs.input === document.activeElement;
      if (event.code === "Slash" && !isInputFocused) {
        event.preventDefault();
        this.$refs.input.focus();
      }
    },
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
    clear() {
      this.searchQuery = "";
      this.$refs.input.focus();
    },
  },
};
</script>

<style></style>
