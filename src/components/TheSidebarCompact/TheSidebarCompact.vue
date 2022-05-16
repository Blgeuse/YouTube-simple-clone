<template>
  <aside :class="classes">
    <section>
      <ul>
        <SidebarCompactNavItem
          v-for="navItem in navItems"
          :key="navItem.title"
          :icon="navItem.icon"
          :title="navItem.title"
          :is-active="navItem.isActive"
        />
      </ul>
    </section>
  </aside>
</template>

<script>
import SidebarCompactNavItem from "./SidebarCompactNavItem.vue";
export default {
  data() {
    return {
      navItems: [
        {
          title: "Home",
          icon: "home",
          isActive: true,
        },
        {
          title: "Trending",
          icon: "fire",
          isActive: false,
        },
        {
          title: "Subscriptions",
          icon: "collection",
          isActive: false,
        },
        {
          title: "Library",
          icon: "duplicate",
          isActive: false,
        },
        {
          title: "History",
          icon: "clock",
          isActive: false,
        },
      ],
    };
  },
  components: {
    SidebarCompactNavItem,
  },
  computed: {
    classes() {
      return [
        "min-h-screen",
        "overflow-auto",
        "fixed",
        "top-0",
        "pt-14",
        "bg-white",
        "z-20",
      ];
    },
  },
};
</script>

<style></style>
