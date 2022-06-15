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
        @enter="selectSearchResult"
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
    <TheSearchButton @click.stop="selectSearchResult" />
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
  mounted() {
    window.addEventListener("click", this.onClickAndResize);
    window.addEventListener("resize", this.onClickAndResize);
  },
  data() {
    return {
      query: "",
      activeQuery: "",
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
    };
  },
  computed: {
    trimmedQuery() {
      return this.query.replace(/\s+/g, " ").trim();
    },
  },
  methods: {
    onClickAndResize() {
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
      this.isSearchResultsShown =
        isSearchInputActive && this.results.length > 0;
    },
    handlePreviousSearchResult() {
      if (this.isSearchResultsShown) {
        this.makePreviousSearchResultActive();
        this.updateQueryWithSearchResults();
      } else {
        this.toggleSearchResults(true);
      }
    },
    handleNextSearchResult() {
      if (this.isSearchResultsShown) {
        this.makeNextSearchResultActive();
        this.updateQueryWithSearchResults();
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
    },
    makePreviousSearchResultActive() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = this.results.length - 1;
      } else if (this.activeSearchResultId === 0) {
        this.activeSearchResultId = null;
      } else {
        this.activeSearchResultId--;
      }
    },
    updateQueryWithSearchResults() {
      const hasActiveSortResutl = this.activeSearchResultId !== null;
      this.query = hasActiveSortResutl
        ? this.results[this.activeSearchResultId]
        : this.activeQuery;
    },
    selectSearchResult() {
      this.query =
        this.activeSearchResultId === null
          ? this.query
          : this.results[this.activeSearchResultId];

      this.toggleSearchResults(false);

      this.updateSearchResults();
    },
  },
};
</script>

<style></style>
