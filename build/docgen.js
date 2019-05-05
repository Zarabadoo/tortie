const path = require("path");
const docgen = require("vue-docgen-api");

function componentInfoConfigured(filePath) {
  return docgen.parse(filePath, {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets")
    },
    resolve: [path.resolve(__dirname, "src")]
  });
}

const docsButton = componentInfoConfigured(
  path.resolve(__dirname, "../packages/components/button/src/Button.vue")
);

const docsTable = componentInfoConfigured(
  path.resolve(__dirname, "../packages/components/table/src/Table.vue")
);

console.log("BUTTON:\n", docsButton, "\n");
console.log("TABLE:\n", docsTable, "\n");
