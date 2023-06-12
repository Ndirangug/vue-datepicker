// Styles
import "./VDPickerButtons.scss";

// Mixins
import colorable from "../../../mixins/colorable";

// Helpers
import mixins from "../../../utils/mixins";

const baseMixins = mixins(colorable);

export default baseMixins.extend({
  name: "VDPickerButtons",
  inject: ["VDPicker"],
  props: {
    label: { type: String },
  },
  computed: {
    classes() {
      return {};
    },
    computedColor() {
      if (this.disabled) return "";
      return this.isMenuActive ? this.color : "";
    },
    isDirty() {
      return this.isDateDefined;
    },
  },
  methods: {
    // ------------------------------
    // Events
    // ------------------------------
    onKeyDown(event) {
      this.$emit("keydown", event);
    },
    clearableCallback() {
      this.$emit("clearDate");
    },
    // ------------------------------
    // Generate Template
    // ------------------------------
  },
  render(h) {
    return h("button", this.label);
  },
});
