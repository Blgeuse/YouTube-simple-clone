<template>
  <DropdownSettingsHeader title="Chose your location" @back="$emit('close')" />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(locationName, locationId) in location"
        :key="locationId"
        :label="locationName"
        :active="locationId === selectedOptions.location.id"
        @click="selectOption({ id: locationId, text: locationName })"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubMenu from "../../mixins/dropdownSubMenu";

export default {
  mixins: [dropdownSubMenu],
  data() {
    return {
      optionName: "location",
      location: ["English", "Russian"],
    };
  },
};
</script>

<style></style>
