<template>
  <TheHeader @open-mobile-sidebar="openMobileSidebar" />
  <!-- Small sidebar -->
  <TheSidebarSmall />
  <!-- Sidebar -->
  <TheSidebar />
  <!-- Mobile sidebar -->
  <TheMobileSidebar :isOpen="isMobileSidebarOpen" @close="closeMobileSidebar" />
  <!-- Categories -->
  <TheCategories />
  <!-- Videos -->
  <TheVideos />
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
    };
  },
  methods: {
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
