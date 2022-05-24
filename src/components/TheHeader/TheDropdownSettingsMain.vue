<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems.slice(0, -1)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
        @click.stop="selectMenu(listItem)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        :label="listItems[listItems.length - 1].label"
        :with-sub-menu="listItems[listItems.length - 1].withSubMenu"
        :icon="listItems[listItems.length - 1].icon"
        @click.stop="selectMenu(listItems[listItems.length - 1])"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
export default {
  components: { DropdownSettingsListItem },
  emits: ["select-menu"],
  methods: {
    selectMenu(listItem) {
      listItem.withSubMenu && this.$emit("select-menu", listItem.id);
    },
  },
  data() {
    return {
      listItems: [
        {
          id: "appearance",
          label: "Appearance: Light",
          icon: "sun",
          withSubMenu: true,
        },
        {
          id: "language",
          label: "Language: English",
          icon: "translate",
          withSubMenu: true,
        },
        {
          id: "location",
          label: "Location: Russia",
          icon: "globeAlt",
          withSubMenu: true,
        },
        {
          id: "settings",
          label: "Settings",
          icon: "shieldCheck",
          withSubMenu: false,
        },
        {
          id: "help",
          label: "Help",
          icon: "questionMarckCircle",
          withSubMenu: false,
        },
        {
          id: "send_feedback",
          label: "Send feedback",
          icon: "chatAlt",
          withSubMenu: false,
        },
        {
          id: "keyboard_shortcuts",
          label: "Keyboard shortcuts",
          icon: "calculator",
          withSubMenu: false,
        },
        {
          id: "restricted_mode",
          label: "Restricted Mode: Off",
          icon: null,
          withSubMenu: true,
        },
      ],
    };
  },
};
</script>

<style></style>
