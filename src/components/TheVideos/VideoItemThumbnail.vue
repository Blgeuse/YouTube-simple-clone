<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${index}/720/404`" />
    <VideoItemThumbnailButton label="Watch later" icon="clock" class="top-0" />
    <VideoItemThumbnailButton
      label="Add to queue"
      icon="menuAlt3"
      class="top-8"
    />
    <span
      class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold"
      >6:35</span
    >
  </div>
</template>

<script>
import VideoItemThumbnailButton from "./VideoItemThumbnailButton.vue";
export default {
  components: {
    VideoItemThumbnailButton,
  },
  props: ["index"],
};
</script>

<style></style>
