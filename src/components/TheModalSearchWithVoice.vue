<template>
  <BaseModal>
    <p class="text-2xl mb-52">{{ text }}</p>
    <div class="flex justify-center items-center">
      <span v-show="isListening" :class="buttonAnimationClasses" />

      <button @click="toggleRecording" :class="buttonClasses">
        <BaseIcon name="microphone" />
      </button>
    </div>
    <div :class="buttonHintClasses">Tap the microphone to try again</div>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal.vue";
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseModal,
    BaseIcon,
  },
  data() {
    return {
      isListening: true,
      isRecording: false,
      isQuite: false,
      recordingTimeout: null,
    };
  },
  computed: {
    text() {
      if (this.isQu) {
        return "Didn't hear that. Try again.";
      }
      if (this.isListening || this.isRecording) {
        return "Listening...";
      }
      return "Microphone off. Try again.";
    },
    buttonClasses() {
      return [
        this.isListening ? "bg-red-600" : "bg-gray-300",
        this.isListening ? "text-white" : "text-black",
        "w-16",
        "h-16",
        "mx-auto",
        "rounded-full",
        "flex",
        "justify-center",
        "relative",
        "focus:outline-none",
        "items-center",
      ];
    },
    buttonHintClasses() {
      return [
        this.isListening ? "invisible" : "visible",
        "text-center",
        "text-sm",
        "text-gray-500",
        "mt-4",
      ];
    },
    buttonAnimationClasses() {
      return [
        this.isRecording ? "bg-gray-300" : "border border-gray-300",
        "animate-ping",
        "absolute",
        "w-14",
        "h-14",
        "rounded-full",
      ];
    },
  },
  mounted() {
    this.handleRecordingTimeout();
  },
  beforeUnmount() {
    clearTimeout(this.recordingTimeout);
  },
  methods: {
    toggleRecording() {
      clearTimeout(this.recordingTimeout);

      this.isQuite = false;
      if (this.isRecording) {
        this.isRecording = false;
        this.isListening = false;
      } else if (this.isListening) {
        this.isRecording = true;
      } else {
        this.isListening = true;
      }

      this.handleRecordingTimeout();
    },
    handleRecordingTimeout() {
      if (this.isListening || this.isRecording) {
        this.recordingTimeout = setTimeout(() => {
          this.isQuite = true;
          this.isListening = false;
          this.isRecording = false;
        }, 5000);
      }
    },
  },
};
</script>

<style></style>
