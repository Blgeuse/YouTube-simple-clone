<template>
  <header :class="classes">
    <div :class="leftSideClasses">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button
          @click="$emit('toggleSidebar')"
          class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
        >
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchWrapper
      v-show="isSearchShown"
      :is-small-scren="isSmallScren"
      @close="closeMobileSearch"
      @open-voice-modal="isVoiceModalOpen = true"
    />

    <div :class="rightSideClasses">
      <BaseTooltip text="Search with your voice">
        <button
          @click="isVoiceModalOpen = true"
          class="sm:hidden p-2 focus:outline-none"
        >
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <BaseTooltip text="Search">
        <button
          @click.stop="isMobileSearchActive = true"
          class="sm:hidden p-2 focus:outline-none"
        >
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>

      <TheDropdownApps />

      <TheDropdownSettings />
      <ButtonLogin />
    </div>
  </header>
  <teleport to="body">
    <BaseModal v-if="isVoiceModalOpen" @close="isVoiceModalOpen = false" />
  </teleport>
</template>

<script>
import LogoMain from "./LogoMain.vue";
import TheDropdownApps from "./TheDropdownApps.vue";
import TheDropdownSettings from "./TheDropdownSettings.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseTooltip from "../BaseTooltip.vue";
import BaseModal from "../BaseModal.vue";
import TheSearchWrapper from "../TheSearchWrapper/TheSearchWrapper.vue";
import ButtonLogin from "../ButtonLogin.vue";
import { computed } from "vue";

export default {
  components: {
    BaseTooltip,
    BaseIcon,
    BaseModal,
    LogoMain,
    TheSearchWrapper,
    TheDropdownSettings,
    TheDropdownApps,
    ButtonLogin,
  },
  emits: {
    toggleSidebar: null,
  },
  provide() {
    return {
      isMobileSearchActive: computed(() => this.isMobileSearchActive),
    };
  },
  data() {
    return {
      isSmallScren: false,
      isMobileSearchActive: false,
      isVoiceModalOpen: false,
      classes: [
        "flex",
        "justify-between",
        "bg-white",
        "bg-opacity-95",
        "w-full",
      ],
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  computed: {
    isMobileSearchShown() {
      return this.isSmallScren && this.isMobileSearchActive;
    },
    isSearchShown() {
      return this.isMobileSearchShown || !this.isSmallScren;
    },
    opacity() {
      return this.isMobileSearchShown ? "opacity-0" : "opacity-100";
    },
    leftSideClasses() {
      return ["lg:w-1/4", "flex", this.opacity];
    },
    rightSideClasses() {
      return [
        "flex",
        "items-center",
        "justify-end",
        "lg:w-1/4",
        "sm:space-x-3",
        "p-2",
        "sm:px-4",
        this.opacity,
      ];
    },
  },
  methods: {
    onResize() {
      if (window.innerWidth < 640) {
        this.isSmallScren = true;
      } else {
        this.closeMobileSearch();
        this.isSmallScren = false;
      }
    },
    closeMobileSearch() {
      this.isMobileSearchActive = false;
    },
  },
};
</script>

<style></style>
