<template>
  <div class="mr-2 flex w-full">
    <div class="relative flex w-full">
      <TheSearchInput
        @change-state="toggleSearchResults"
        @update:query="updateSearchResults"
        v-model:query="query"
        :has-results="results.length"
        @keyup.up="handlePreviousSearchResult"
        @keyup.down="handleNextSearchResult"
        @keydown.up.prevent
      />
      <TheSearchResults
        :active-result-id="activeSearchResultId"
        v-show="isSearchResultsShown"
        :results="results"
      />
    </div>
    <TheSearchButton />
  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";
import TheSearchResults from "./TheSearchResults.vue";
export default {
  components: {
    TheSearchInput,
    TheSearchResults,
    TheSearchButton,
  },
  props: ["searchQuery"],
  emits: ["update-search-query"],
  data() {
    return {
      query: this.searchQuery,
      keywords: [
        "new yourk giant",
        "new yourk alicia keys",
        "new yourk ginats vs washington football",
        "new yourk",
        "new yourk song",
        "new yourk new yourk frank sinatra",
        "new yourk jets",
        "new yourk city",
        "new yourk giants live",
        "new yourk state of mind",
        "new yourk giants vs washington footbal live",
        "new yourk giants injury",
        "new yourk giants live stream",
        "new yourk accent",
      ],
      isSearchResultsShown: false,
      activeSearchResultId: null,
      resutls: [],
      activeQuery: this.searchQuerh,
    };
  },
  watch: {
    query(query) {
      this.$emit("update-search-query", query);
    },
  },
  computed: {
    trimmedQuery() {
      return this.query.replace(/\s+/g, " ").trim();
    },
  },
  methods: {
    updateSearchResults() {
      this.activeSearchResultId = null;
      this.activeQuery = this.query;

      if (this.query === "") {
        this.results = [];
      } else {
        this.resutls = this.keywords.filter((result) =>
          result.includes(this.trimmedQuery)
        );
      }
    },
    toggleSearchResults(isSearchInputActive) {
      this.isSearchResultsShown =
        isSearchInputActive && this.results.length;
    },
    handlePreviousSearchResult() {
      if (this.isSearchResultsShown) {
        this.makePreviousSearchResultActive();
      } else {
        this.toggleSearchResults(true);
      }
    },
    handleNextSearchResult() {
      if (this.isSearchResultsShown) {
        this.makeNextSearchResultActive();
      } else {
        this.toggleSearchResults(true);
      }
    },
    makeNextSearchResultActive() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = 0;
      } else if (
        this.activeSearchResultId + 1 ===
        this.results.length
      ) {
        this.activeSearchResultId = null;
      } else {
        this.activeSearchResultId++;
      }

      this.updateQueryWithSearchResults();
    },
    makePreviousSearchResultActive() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = this.results.length - 1;
      } else if (this.activeSearchResultId === 0) {
        this.activeSearchResultId = null;
      } else {
        this.activeSearchResultId--;
      }

      this.updateQueryWithSearchResults();
    },
    updateQueryWithSearchResults() {
      const hasActiveSortResutl = this.activeSearchResultId !== null;
      this.query = hasActiveSortResutl
        ? this.results[this.activeSearchResultId]
        : this.activeQuery;
    },
  },
};
</script>

<style></style>
