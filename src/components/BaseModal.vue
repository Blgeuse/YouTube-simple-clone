<template>
  <div
    class="focus:outline-none fixed inset-0 z-10 bg-black bg-opacity-80"
    @click.self="close"
    @keydown.esc="close"
    tabindex="-1"
  >
    <div class="bg-white max-w-sm mx-auto my-8">
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <div class="p-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        officia.`
      </div>
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from "./BaseModalButtonClose.vue";
export default {
  components: {
    BaseModalButtonClose,
  },
  emits: ["close"],
  mounted() {
    this.$el.focus();
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
