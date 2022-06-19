<template>
  <div :class="classes">
    <ul>
      <li
        v-for="(text, id) in results"
        :key="text"
        :class="getItemClasses(id)"
        @mouseenter="$emit('search-result-mouseenter', id)"
        @mouseleave="$emit('search-result-mouseleave')"
        @click.stop="$emit('search-result-click')"
      >
        <span @mouseenter="$emit('search-result-mouseenter', id)">{{
          text
        }}</span>
      </li>
    </ul>
    <a @click="openSearchPredictionsModal" :class="reportLinkClasses" herf="#"
      >Report search predictions</a
    >
    <teleport to="body">
      <TheModalSearchPredictions
        v-if="isSearchPredictionsModalOpen"
        :search-predictions="results"
        @close="isSearchPredictionsModalOpen = false"
      />
    </teleport>
  </div>
</template>

<script>
import TheModalSearchPredictions from "../TheModalSearchPredictions.vue";
export default {
  props: ["results", "activeResultId"],
  emits: [
    "search-result-mouseenter",
    "search-result-mouseleave",
    "search-result-click",
  ],
  components: { TheModalSearchPredictions },
  methods: {
    openSearchPredictionsModal() {
      this.isSearchPredictionsModalOpen = true;
    },
    getItemClasses(resultId) {
      return [
        resultId === this.activeResultId ? "bg-gray-200" : "bg-transparent",
        "text-black",
        "px-3",
        "py-1",
        "select-none",
        "truncate",
      ];
    },
  },
  data() {
    return {
      isSearchPredictionsModalOpen: false,
      classes: [
        "absolute",
        "top-full",
        "w-full",
        "bg-white",
        "border",
        "border-t-0",
        "border-gray-300",
        "shadow-md",
        "pt-4",
      ],
      reportLinkClasses: [
        "w-full",
        "inline-block",
        "text-right",
        "text-xs",
        "italic",
        "text-gray-500",
        "hover:text-black",
        "pr-2",
        "cursor-pointer",
      ],
    };
  },
};
</script>

<style></style>
