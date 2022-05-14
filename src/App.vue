<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <!-- Small sidebar -->
  <TheSidebarSmall :isOpen="sidebarState === 'compact'" />
  <!-- Sidebar -->
  <TheSidebar :isOpen="sidebarState === 'normal'" />
  <!-- Mobile sidebar -->
  <TheMobileSidebar :isOpen="isMobileSidebarOpen" @close="closeMobileSidebar" />
  <!-- Categories -->
  <TheCategories :is-sidebar-open="sidebarState === 'normal'" />
  <!-- Videos -->
  <TheVideos :is-sidebar-open="sidebarState === 'normal'" />
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheSidebarSmall from "./components/TheSidebarSmall/TheSidebarSmall.vue";
import TheSidebar from "./components/TheSidebar/TheSidebar.vue";
import TheMobileSidebar from "./components/TheMobileSidebar/TheMobileSidebar.vue";
import TheCategories from "./components/TheCategories/TheCategories.vue";
import TheVideos from "./components/TheVideos/TheVideos.vue";

export default {
  components: {
    TheHeader,
    TheSidebarSmall,
    TheSidebar,
    TheMobileSidebar,
    TheCategories,
    TheVideos,
  },

  data() {
    return {
      isMobileSidebarOpen: false,
      sidebarState: null,
    };
  },
  mounted() {
    const width = window.innerWidth;

    if (width >= 768 && width < 1280) {
      this.sidebarState = "compact";
    }
    if (width >= 1280) {
      this.sidebarState = "normal";
    }
  },
  methods: {
    toggleSidebar() {
      const width = window.innerWidth;

      if (width >= 1280) {
        this.sidebarState =
          this.sidebarState === "normal" ? "compact" : "normal";
      } else {
        this.openMobileSidebar();
      }
    },
    openMobileSidebar() {
      this.isMobileSidebarOpen = true;
    },
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false;
    },
  },
};
</script>

<style></style>
