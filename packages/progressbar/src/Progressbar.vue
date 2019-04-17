<script>
export default {
  name: "TrtProgressbar",
  data() {
    return {
      progressFactor: null
    };
  },
  props: {
    /**
     * Show that the progress bar is waiting for a process to finish.
     */
    busy: {
      default: false,
      type: Boolean
    },

    /**
     * Set the minimum value available for the progress bar.
     */
    valuemin: {
      default: 0,
      type: Number
    },

    /**
     * Set the maximum value for the progress bar.
     */
    valuemax: {
      default: 100,
      type: Number
    },

    /**
     * Set the value of the progress bar.
     *
     * This should only be provided if there is a known value. If the value is
     * not known, provide `null` as an initial value.
     */
    valuenow: {
      default: null,
      type: Number
    },

    /**
     * Provide an human readable representation of `valuenow`.
     *
     * An example of this would be for shipping progress. Instead of a numeric
     * value, it would be better to provide terms like "Order recieved",
     * "Shipped", and "Delivered".
     */
    valuetext: {
      default: null,
      type: String
    }
  },
  methods: {
    /**
     * Process values and store a factor of progress
     */
    processFactor() {
      let value;
      const now = this.valuenow;
      const min = this.valuemin;
      const max = this.valuemax;

      switch (true) {
        case now === null || now <= min:
          value = 0;
          break;

        case now > max:
          value = 1;
          break;

        default:
          value = (now - min) / (max - min);
          break;
      }

      this.progressFactor = value;
    }
  },
  mounted() {
    this.processFactor();
  },
  watch: {
    valuenow() {
      this.processFactor();
    }
  },
  render() {
    return this.$scopedSlots.default({
      progressFactor: this.progressFactor,
      attributes: {
        role: "progressbar",
        "aria-valuenow": this.valuenow,
        "aria-valuemin": this.valuemin,
        "aria-valuemax": this.valuemax,
        "aria-valuetext": this.valuetext,
        "aria-busy": this.busy,
        "aria-live": "polite"
      }
    });
  }
};
</script>
