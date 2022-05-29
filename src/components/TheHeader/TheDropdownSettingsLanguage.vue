<template>
  <DropdownSettingsHeader
    title="Chose your language"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(languageName, languageId) in languages"
        :key="languageId"
        :label="languageName"
        :active="languageId === selectedOptions.languageId"
        @click="selectOption(languageId)"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  components: { DropdownSettingsHeader, DropdownSettingsListItem },
  emits: ["select-menu", "select-option"],
  props: ["selectedOptions"],
  data() {
    return {
      languages: ["English", "Russian"],
    };
  },
  methods: {
    selectOption(languageId) {
      this.$emit("select-option", { name: "languageId", value: languageId });
    },
  },
};
</script>

<style></style>
