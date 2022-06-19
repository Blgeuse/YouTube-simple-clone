<template>
  <input
    v-model="modelValue"
    v-bind="$attrs"
    :id="id"
    class="w-5 h-5 cursor-pointer"
    type="checkbox"
  />
  <label v-if="$slots.default" class="pl-4 cursor-pointer flex-grow" :for="id">
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    id: String,
    modelValue: Array,
  },
};
</script>

<style></style>
