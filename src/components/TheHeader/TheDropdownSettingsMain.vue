<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="menuItem in menuItems.slice(0, -1)"
        :key="menuItem.label"
        :label="menuItem.label"
        :icon="menuItem.icon"
        :with-sub-menu="menuItem.withSubMenu"
        @click.stop="selectMenu(menuItem)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        :label="menuItems[menuItems.length - 1].label"
        :with-sub-menu="menuItems[menuItems.length - 1].withSubMenu"
        :icon="menuItems[menuItems.length - 1].icon"
        @click.stop="selectMenu(menuItems[menuItems.length - 1])"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
export default {
  components: { DropdownSettingsListItem },
  props: ["menuItems"],
  emits: ["select-menu"],
  methods: {
    selectMenu(menuItem) {
      menuItem.withSubMenu && this.$emit("select-menu", menuItem);
    },
  },
};
</script>

<style></style>
