/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
// import {
//   linkTo
// } from "@storybook/addon-links";

import TrtButton from "./src/Button.vue";

storiesOf("Components/Button", module)
  .add("with text", () => ({
    components: {
      TrtButton
    },
    template: '<trt-button @click="action">Hello Button</trt-button>',
    methods: {
      action: action("clicked")
    }
  }))
  .add("with some emoji", () => ({
    components: {
      TrtButton
    },
    template: '<trt-button @click="action">😀 😎 👍 💯</trt-button>',
    methods: {
      action: action("clicked")
    }
  }));
