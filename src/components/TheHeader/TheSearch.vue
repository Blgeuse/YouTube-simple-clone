<template>
  <div class="mr-2 flex w-full">
    <div class="relative flex w-full">
      <TheSearchInput v-model:query="query" />
      <TheSearchResults v-show="query" :results="results" />
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
  data() {
    return {
      query: "",
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
    };
  },
  computed: {
    results() {
      return this.keywords.filter((result) => result.includes(this.query));
    },
  },
};
</script>

<style></style>
