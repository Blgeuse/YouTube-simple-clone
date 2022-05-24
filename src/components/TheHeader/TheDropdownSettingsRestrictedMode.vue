<template>
  <DropdownSettingsHeader
    title="Resticted Mode"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-4 px-3 space-y-4 text-black text-sm">
    <p>
      This helps hide potentially mature videos. No filter is 100% accurate.
    </p>
    <p>This setting only applies to this browser.</p>
    <div class="text-gray-600 font-semibold items-center">
      <span class="uppercase mr-2">Activate restricted mode</span>
      <input type="checkbox" />
    </div>
  </section>
</template>

<script>
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  components: { DropdownSettingsHeader },
  emits: ["select-menu"],
};
</script>

<style></style>
