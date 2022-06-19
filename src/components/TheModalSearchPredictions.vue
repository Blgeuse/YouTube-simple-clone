<template>
  <BaseModal @close="$emit('close')" class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>

    <TheSearchPredictionsList
      v-model="selectedSearchPredictions"
      :search-predictions="searchPredictions"
    />

    <p class="text-xs text-gray-600 mt-5">The selected predictions are:</p>
    <TheSearchPredictionCategories
      v-model="selectedSearchPredictionCategory"
      :categories="searchPredictionCategories"
    />
    <div class="text-black text-sm mt-6">
      <BaseTextarea :limit="10" v-model="searchPredictionDetails" />
    </div>

    <template #footer="{ close }">
      <BaseButton @click="close" class="ml-auto">Cancel</BaseButton>
      <BaseButton disabled class="ml-1 text-gray-400 cursor-auto">
        Report
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script>
import TheSearchPredictionsList from "./TheSearchPredictionsList.vue";
import TheSearchPredictionCategories from "./TheSearchPredictionCategories.vue";
import BaseModal from "./BaseModal.vue";
import BaseButton from "./BaseButton.vue";
import BaseTextarea from "./BaseTextarea.vue";

export default {
  emits: ["close"],
  props: {
    searchPredictions: Array,
  },
  components: {
    TheSearchPredictionsList,
    TheSearchPredictionCategories,
    BaseModal,
    BaseButton,
    BaseTextarea,
  },
  data() {
    return {
      selectedSearchPredictions: [],
      selectedSearchPredictionCategory: null,
      searchPredictionDetails: "",
      searchPredictionCategories: [
        "Hateful",
        "Sexually Explicit",
        "Violent",
        "Dangerous and harmful activity",
        "Other",
      ],
    };
  },
};
</script>

<style></style>
