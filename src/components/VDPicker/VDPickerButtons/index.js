import VDPickerButton from './VDPickerButton';

// Styles
import './VDPickerButtons.scss';

// Mixins
import colorable from '../../../mixins/colorable';

// Helpers
import mixins from '../../../utils/mixins';
import {
  generateDate } from '../utils/helpers';

const baseMixins = mixins(colorable);

export default baseMixins.extend({
  name: 'VDPickerButtons',

  methods: {
    emitDate (date) {
      this.$emit('select-date', date);
    },
  },

  render (h) {
    const todayDate = generateDate({
      date: new Date(),
      locale: this.currentLocale,
    });
    const yesterdayDate = todayDate.subtract(1, 'day');
    const tomorrowDate = todayDate.add(1, 'day');

    const yesterdayButton = this.$createElement(VDPickerButton, {
      props: { label: 'Yesterday' },
      nativeOn: { click: () => this.emitDate(yesterdayDate) },
    });
    const todayButton = this.$createElement(VDPickerButton, {
      props: { label: 'Today' },
      nativeOn: { click: () => this.emitDate(todayDate) },
    });
    const tomorrowButton = this.$createElement(VDPickerButton, {
      props: { label: 'Tomorrow' },
      nativeOn: { click: () => this.emitDate(tomorrowDate) },
    });

    return h('div', { staticClass: 'vd-picker__buttons' }, [
      yesterdayButton,
      todayButton,
      tomorrowButton,
    ]);
  },
});
