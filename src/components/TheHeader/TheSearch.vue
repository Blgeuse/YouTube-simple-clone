<template>
  <div class="mr-2 flex w-full">
    <div class="relative flex w-full">
      <TheSearchInput
        v-model:query="query"
        :has-results="results.length"
        @change-state="toggleSearchResults"
        @update:query="updateSearchResults"
        @keyup.up="handlePreviousSearchResult"
        @keyup.down="handleNextSearchResult"
        @keydown.up.prevent
      />
      <TheSearchResults
        v-show="isSearchResultsShown"
        :active-result-id="activeSearchResultId"
        :results="results"
        @search-result-mouseenter="activeSearchResultId = $event"
        @search-result-mouseleave="activeSearchResultId = null"
        @search-result-click="selectSearchResult"
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
  mounted() {
    document.addEventListener("click", this.handleClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClick);
  },
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
      results: [],
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
    handleClick() {
      this.toggleSearchResults(false);
    },
    updateSearchResults() {
      this.activeSearchResultId = null;
      this.activeQuery = this.query;

      if (this.query === "") {
        this.results = [];
      } else {
        this.results = this.keywords.filter((result) =>
          result.includes(this.trimmedQuery)
        );
      }
    },
    toggleSearchResults(isSearchInputActive) {
      this.isSearchResultsShown = isSearchInputActive && this.results.length;
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
      } else if (this.activeSearchResultId + 1 === this.results.length) {
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
    selectSearchResult(searchResultId) {
      this.query = this.results[searchResultId];

      this.updateSearchResults();

      this.toggleSearchResults(false);
    },
  },
};
</script>

<style></style>
