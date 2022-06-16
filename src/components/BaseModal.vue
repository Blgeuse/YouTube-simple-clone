<template>
  <div class="fixed inset-0 z-10 bg-black bg-opacity-80">
    <div class="bg-whtie max-w-sm mx-auto my-8">
      <div class="p-2 text-right">
        <BaseModalButtonClose />
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
};
</script>

<style></style>
