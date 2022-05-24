<template>
  <DropdownSettingsHeader
    title="Chose your location"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(locationName, locationId) in location"
        :key="locationId"
        :label="locationName"
        :active="locationId === selectedLocationId"
        @click="selectedLocationId = locationId"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  components: { DropdownSettingsHeader, DropdownSettingsListItem },
  emits: ["select-menu"],
  data() {
    return {
      selectedLocationId: 0,
      location: ["English", "Russian"],
    };
  },
};
</script>

<style></style>
