<template>
  <div class="relative">
    <textarea
      @input="adjustHeight"
      v-bind="$attrs"
      v-model="modelValue"
      :maxlength="limit"
      placeholder="Provide additional details (optional)"
      ref="textarea"
      class="border rounded-sm pt-2 pb-8 px-2 resize-none w-full focus:outline-none overflow-hidden peer"
    />
    <BaseTextareaCounter>{{ counter }}</BaseTextareaCounter>
  </div>
</template>

<script>
import BaseTextareaCounter from "./BaseTextareaCounter.vue";
export default {
  components: {
    BaseTextareaCounter,
  },
  props: {
    modelValue: String,
    limit: Number,
  },
  computed: {
    counter() {
      return `${this.modelValue.length} / ${this.limit}`;
    },
  },
  mounted() {
    this.adjustHeight();
  },
  methods: {
    adjustHeight() {
      this.$refs.textarea.style.height = "auto";
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
    },
  },
};
</script>
