<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div
      class="flex items-center"
      v-for="(label, index) in searchPredictions"
      :key="label"
    >
      <input
        class="w-5 h-5 cursor-pointer"
        type="checkbox"
        v-model="selectedSearchPredictions"
        :id="index"
        :value="label"
      />
      <label class="pl-4 cursor-pointer flex-grow" :for="index">{{
        label
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchPredictions: Array,
    modelValue: Array,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selectedSearchPredictions: this.modelValue,
    };
  },
  watch: {
    selectedSearchPredictions() {
      this.$emit("update:modelValue", this.selectedSearchPredictions);
    },
  },
};
</script>

<style></style>
