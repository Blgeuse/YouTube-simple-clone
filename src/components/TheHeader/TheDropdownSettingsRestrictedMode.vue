<template>
  <DropdownSettingsHeader title="Resticted Mode" @back="$emit('close')" />
  <section class="py-4 px-3 space-y-4 text-black text-sm">
    <p>
      This helps hide potentially mature videos. No filter is 100% accurate.
    </p>
    <p>This setting only applies to this browser.</p>
    <div class="text-gray-600 font-semibold items-center">
      <span class="uppercase mr-2">Activate restricted mode</span>
      <input
        type="checkbox"
        :checked="selectedOptions.restrictedMode.enabled"
        @input="selectOption"
      />
    </div>
    <template v-if="selectedOptions.restrictedMode.enabled">
      <p>
        Restricted Mode lock prevents others from changing the Resticted Mode
        settings on this browser.
      </p>
      <p>
        Lock resticted Mode on this browser
      </p>
    </template>
  </section>
</template>

<script>
import dropdownSubMenu from "../../mixins/dropdownSubMenu";

export default {
  mixins: [dropdownSubMenu],
  methods: {
    selectOption($event) {
      const enabled = $event.target.checked;
      const value = { enabled, text: enabled ? "On" : "Off" };

      this.$emit("select-option", {
        name: "restrictedMode",
        value,
      });
    },
  },
};
</script>

<style></style>
