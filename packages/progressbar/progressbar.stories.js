/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
// import {
//   linkTo
// } from "@storybook/addon-links";

import TrtProgressbar from "./src/Progressbar.vue";
import TrtProgressbarLinear from "./src/ProgressbarLinear.vue";
import TrtProgressbarRadial from "./src/ProgressbarRadial.vue";

storiesOf("Components|Progressbar", module)
  .add("renderless", () => ({
    components: {
      TrtProgressbar
    },
    template: `
      <trt-progressbar v-slot="{ progressFactor, attributes }" :valuenow="40">
        <div v-bind="attributes">{{ progressFactor }}</div>
      </trt-progressbar>
    `
  }))
  .add("linear", () => ({
    components: {
      TrtProgressbarLinear
    },
    template: `
      <trt-progressbar-linear :valuenow="40"></trt-progressbar-linear>
    `
  }))
  .add("radial", () => ({
    components: {
      TrtProgressbarRadial
    },
    template: `
      <trt-progressbar-radial :valuenow="40"></trt-progressbar-radial>
    `
  }));
