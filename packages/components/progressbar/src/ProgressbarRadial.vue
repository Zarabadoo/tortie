<template>
  <trt-progressbar v-bind="$attrs" v-slot="{ progressFactor, attributes }">
    <div class="trt-progressbar-radial" v-bind="attributes">
      <svg
        role="presentation"
        :viewBox="viewBox"
        class="trt-progressbar-radial__progress"
      >
        <circle
          ref="track"
          class="trt-progressbar-radial__track"
          v-bind="circleAttrs"
        ></circle>

        <circle
          ref="value"
          class="trt-progressbar-radial__indicator"
          v-bind="circleAttrs"
          :style="circleStyles(progressFactor)"
        ></circle>
      </svg>
    </div>
  </trt-progressbar>
</template>

<script>
import TrtProgressbar from "./Progressbar.vue";

export default {
  name: "TrtProgressbarRadial",
  components: {
    TrtProgressbar
  },
  data() {
    return {
      diameter: 0,
      center: 0,
      radius: 100 / (Math.PI * 2) // Make the offset easily divisible by 100
    };
  },
  computed: {
    /**
     * Attributes for the SVG circles.
     *
     * @returns {object} Attribute values to be bound to circle elements
     */
    circleAttrs() {
      return {
        cx: this.center,
        cy: this.center,
        r: this.radius
      };
    },

    /**
     * Values for the SVG viewbox.
     *
     * @returns {string} Value for the SVG `viewBox` property
     */
    viewBox() {
      return this.diameter ? `0 0 ${this.diameter} ${this.diameter}` : null;
    }
  },
  methods: {
    /**
     * Calculates and stores the diameter and center of the SVG.
     *
     * Takes into account the radius size along with computed styles for the
     * stroke width.
     */
    calculateDiameter() {
      const trackStroke = parseFloat(
        getComputedStyle(this.$refs.track).strokeWidth
      );
      const valueStroke = parseFloat(
        getComputedStyle(this.$refs.value).strokeWidth
      );

      let stroke = valueStroke > trackStroke ? valueStroke : trackStroke;

      this.diameter = this.radius * 2 + stroke;
      this.center = this.diameter / 2;
    },

    /**
     * Calculates the styles to represent the progress along the circle path.
     *
     * Of note is the use of `styles` and not a direct attribute on the
     * element. This is done since these inline styles will take priority over
     * any stylesheet-based styles used for a pure CSS implementation as these
     * will be more accurate.
     *
     * @return {object} A set of attributes to bind to the progress circle
     */
    circleStyles(ratio) {
      return {
        strokeDasharray: `${100 * ratio} 100`
      };
    }
  },
  mounted() {
    this.calculateDiameter();
  }
};
</script>

<style lang="scss" scoped>
.trt-progressbar-radial {
  width: 10rem;
  margin: 0 1rem;

  &__progress {
    max-width: 100%;
    transform: rotate(-90deg);
  }

  &__track,
  &__indicator {
    fill: none;
    stroke-width: 2.5;
  }

  &__track {
    stroke: rgba(#000, 0.14);
  }

  &__indicator {
    stroke: blue;
  }
}
</style>
