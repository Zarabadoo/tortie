/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
// import {
//   linkTo
// } from "@storybook/addon-links";

import TrtButton from "./src/Button.vue";

storiesOf("Components|Button", module)
  .add("default", () => ({
    components: {
      TrtButton
    },
    template: '<trt-button @click="action">Click this button</trt-button>',
    methods: {
      action: action("clicked")
    }
  }))
  .add("with icon", () => ({
    components: {
      TrtButton
    },
    template: `
      <trt-button @click="action">
        Upload
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19.355,10.036C18.674,6.595,15.641,4,12,4C9.108,4,6.603,5.639,5.352,8.036C2.343,8.36,0,10.906,0,14c0,3.314,2.686,6,6,6 h13c2.761,0,5-2.239,5-5C24,12.36,21.948,10.221,19.355,10.036z M12,8l5,5h-3v4h-4v-4H7L12,8z"></path>
        </svg>
      </trt-button>`,
    methods: {
      action: action("clicked")
    }
  }))
  .add("is disabled", () => ({
    components: {
      TrtButton
    },
    template: `
      <trt-button @click="action" disabled>
        I am disabled
      </trt-button>`,
    methods: {
      action: action("clicked")
    }
  }));
