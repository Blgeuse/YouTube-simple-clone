<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>

    <TheSearchPredictionsList
      v-model="selectedSearchPredictions"
      :search-predictions="searchPredictions"
    />

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
import BaseModal from "./BaseModal.vue";
import BaseButton from "./BaseButton.vue";

export default {
  emits: ["close"],
  props: {
    searchPredictions: Array,
  },
  components: {
    TheSearchPredictionsList,
    BaseModal,
    BaseButton,
  },
  data() {
    return {
      selectedSearchPredictions: [],
    };
  },
};
</script>

<style></style>
