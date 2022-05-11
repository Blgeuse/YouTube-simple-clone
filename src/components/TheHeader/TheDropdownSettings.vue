<template>
  <div
    class="opacity-0 group-hover:opacity-100 absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0"
  >
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          v-for="listItem in listItems.slice(0, -1)"
          :key="listItem.label"
          :label="listItem.label"
          :icon="listItem.icon"
          :with-sub-menu="listItem.withSubMenu"
        />
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <DropdownSettingsListItem
          :label="listItems[listItems.length - 1].label"
          :with-sub-menu="listItems[listItems.length - 1].withSubMenu"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
export default {
  components: {
    DropdownSettingsListItem,
  },
  data() {
    return {
      listItems: [
        {
          label: "Appearance: Ligh",
          icon: "sun",
          withSubMenu: true,
        },
        {
          label: "Language: English",
          icon: "translate",
          withSubMenu: true,
        },
        {
          label: "Location: Russia",
          icon: "globeAlt",
          withSubMenu: true,
        },
        {
          label: "Settings",
          icon: "shieldCheck",
          withSubMenu: false,
        },
        {
          label: "Help",
          icon: "questionMarckCircle",
          withSubMenu: false,
        },
        {
          label: "Send feedback",
          icon: "chatAlt",
          withSubMenu: false,
        },
        {
          label: "Keyboard shortcuts",
          icon: "calculator",
          withSubMenu: false,
        },
        {
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
