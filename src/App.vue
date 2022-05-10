<script>
  import TheHeader from './components/TheHeader/TheHeader.vue'
  import TheSidebarSmall from './components/TheSidebarSmall/TheSidebarSmall.vue'
  import TheSidebar from './components/TheSidebar/TheSidebar.vue'
  import TheMobileSidebar from './components/TheMobileSidebar/TheMobileSidebar.vue'
  import TheCategories from './components/TheCategories/TheCategories.vue'
  import TheVideos from './components/TheVideos/TheVideos.vue'

  export default {
    components: {
      TheHeader,
      TheSidebarSmall,
      TheSidebar,
      TheMobileSidebar,
      TheCategories,
      TheVideos,
    }
  }
</script>

<template>
  <TheHeader />
  <!-- Small sidebar -->
  <TheSidebarSmall />
  <!-- Sidebar -->
  <TheSidebar />
  <!-- Mobile sidebar -->
  <TheMobileSidebar />
  <!-- Categories -->
  <TheCategories />
  <!-- Videos -->
  <TheVideos />
</template>

<style></style>
