/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";

const req = require.context(
  "../../../../../packages/components",
  true,
  /.stories.js$/
);

function loadStories() {
  console.log("stories:", req.keys());
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
