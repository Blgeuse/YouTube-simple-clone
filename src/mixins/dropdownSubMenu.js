import DropdownSettingsListItem from "../components/TheHeader/DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "../components/TheHeader/DropdownSettingsHeader.vue";

export default {
  components: { DropdownSettingsHeader, DropdownSettingsListItem },
  props: ["selectedOptions"],
  emits: ["close", "select-option"],
  data() {
    return {
      optionName: null
    }
  },
  methods: {
    selectOption(option) {
      this.$emit("select-option", { name: this.optionName, value: option });
    },
  },
}
