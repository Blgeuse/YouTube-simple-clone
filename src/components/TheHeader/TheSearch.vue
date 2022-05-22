<template>
  <div class="mr-2 flex w-full">
    <TheSearchInput />
    <TheSearchButton />
  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";
export default {
  components: {
    TheSearchInput,
    TheSearchButton,
  },
};
</script>

<style></style>
