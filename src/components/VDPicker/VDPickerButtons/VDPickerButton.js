// Styles
import './VDPickerButtons.scss';

// Mixins
import colorable from '../../../mixins/colorable';

// Helpers
import mixins from '../../../utils/mixins';

const baseMixins = mixins(colorable);

export default baseMixins.extend({
  name: 'VDPickerButton',
  props: {
    label: { type: String },
  },
  computed: {
    classes () {
      return {};
    },
    computedColor () {
      if (this.disabled) return '';
      return this.isMenuActive ? this.color : '';
    },
    isDirty () {
      return this.isDateDefined;
    },
  },

  render (h) {
    return h('button', this.label);
  },
});
