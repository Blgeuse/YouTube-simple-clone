<template>
  <div :class="classes">
    <BaseTooltip v-if="isSmallScren" text="Back" right>
      <button @click="$emit('close')" class="mr-2 p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Search with your voice" :left="isSmallScren">
      <button @click="$emit('open-voice-modal')" class="p-2 focus:outline-none">
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
  emits: ["close", "open-voice-modal"],
  props: ["isSmallScren"],
  components: {
    BaseIcon,
    BaseTooltip,
    TheSearch,
  },
  mounted() {
    window.addEventListener("click", this.onClick);
  },
  methods: {
    onClick(event) {
      if (!this.$el.contains(event.target)) {
        this.$emit("close");
      }
    },
  },
  computed: {
    classes() {
      return this.isSmallScren
        ? ["absolute", "w-full", "p-2", "z-10", "flex"]
        : [
            "hidden",
            "sm:flex",
            "items-center",
            "justify-end",
            "p-2.5",
            "pl-8",
            "md:pl-12",
            "md:px-8",
            "flex-1",
            "lg:px-0",
            "lg:w-1/2",
            "max-w-screen-md",
          ];
    },
  },
};
</script>
