<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <!-- Small sidebar -->
  <TheSidebarCompact v-if="isCompactSidebarOpen" />
  <!-- Sidebar -->
  <TheSidebar v-if="isSidebarOpen" />
  <!-- Mobile sidebar -->
  <TheMobileSidebar :isOpen="isMobileSidebarOpen" @close="closeMobileSidebar" />
  <!-- Categories -->
  <TheCategories :is-sidebar-open="isSidebarOpen" />
  <!-- Videos -->
  <TheVideos :is-sidebar-open="isSidebarOpen" />
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheSidebarCompact from "./components/TheSidebarCompact/TheSidebarCompact.vue";
import TheSidebar from "./components/TheSidebar/TheSidebar.vue";
import TheMobileSidebar from "./components/TheMobileSidebar/TheMobileSidebar.vue";
import TheCategories from "./components/TheCategories/TheCategories.vue";
import TheVideos from "./components/TheVideos/TheVideos.vue";

export default {
  components: {
    TheHeader,
    TheSidebarCompact,
    TheSidebar,
    TheMobileSidebar,
    TheCategories,
    TheVideos,
  },

  data() {
    return {
      isCompactSidebarActive: false,
      isCompactSidebarOpen: false,
      isMobileSidebarOpen: false,
      isSidebarOpen: false,
    };
  },
  methods: {
    onResize() {
      const width = window.innerWidth;

      if (width < 768) {
        this.isCompactSidebarOpen = false;
        this.isSidebarOpen = false;
      } else if (width < 1280) {
        this.isCompactSidebarOpen = true;
        this.isSidebarOpen = false;
      } else {
        this.isCompactSidebarOpen = this.isCompactSidebarActive;
        this.isSidebarOpen = !this.isCompactSidebarActive;
      }
    },
    toggleSidebar() {
      const width = window.innerWidth;

      if (width >= 1280) {
        this.isCompactSidebarActive = !this.isCompactSidebarActive;

        this.onResize();
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
  mounted() {
    const width = window.innerWidth;

    if (width >= 768 && width < 1280) {
      this.isCompactSidebarActive = true;
    }
    if (width >= 1280) {
      this.isCompactSidebarActive = false;
    }

    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
};
</script>

<style></style>
