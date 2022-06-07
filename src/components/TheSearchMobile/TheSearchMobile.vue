<template>
  <div class="absolute w-full p-2 z-10 flex">
    <BaseTooltip text="Back" right>
      <button @click="$emit('close')" class="mr-2 p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch
      @update-search-query="$emit('update-search-query', $event)"
      :search-query="searchQuery"
    />
    <BaseTooltip text="Search with your voice" left>
      <button class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";
import BaseTooltip from "../BaseTooltip.vue";
import TheSearch from "../TheHeader/TheSearch.vue";

export default {
  emits: ["close"],
  props: ["searchQuery"],
  emits: ["update-search-query"],
  components: {
    BaseIcon,
    BaseTooltip,
    TheSearch,
  },
  mounted() {
    window.addEventListener("click", this.onClick);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.onClick);
  },
  methods: {
    onClick(event) {
      if (!this.$el.contains(event.target)) {
        this.$emit("close");
      }
    },
  },
};
</script>
