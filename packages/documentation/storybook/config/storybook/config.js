/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";

const req = require.context(
  "../../../../../packages/components",
  true,
  /.stories.js$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
