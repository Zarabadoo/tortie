/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
// import {
//   linkTo
// } from "@storybook/addon-links";

import TrtTable from "./src/Table.vue";

const rows = [
  {
    columns: [
      {
        column: "column1",
        value: "row 1, data 1"
      },
      {
        column: "column2",
        value: "row 1, data 2"
      },
      {
        column: "column3",
        value: "row 1, data 3"
      },
      {
        column: "column4",
        value: "row 1, data 4"
      },
      {
        column: "column5",
        value: "row 1, data 5"
      },
      {
        column: "column6",
        value: "row 1, data 6",
        path: "http://example.com"
      }
    ]
  },
  {
    columns: [
      {
        column: "column1",
        value: "row 2, data 1"
      },
      {
        column: "column2",
        value: "row 2, data 2"
      },
      {
        column: "column3",
        value: "row 2, data 3"
      },
      {
        column: "column4",
        value: "row 2, data 4"
      },
      {
        column: "column5",
        value: "row 2, data 5"
      },
      {
        column: "column6",
        value: "row 2, data 6",
        path: "http://example.com"
      }
    ]
  }
];
const headers = [
  {
    id: "column1",
    label: "Column 1",
    weight: 6
  },
  {
    id: "column2",
    label: "Column 2"
  },
  {
    id: "column3",
    label: "Column 3",
    weight: 4
  },
  {
    id: "column4",
    label: "Column 4",
    weight: -10
  },
  {
    id: "column5",
    label: "Column 5",
    weight: 5
  },
  {
    id: "column6",
    label: "Column 6"
  },
  {
    id: "column7",
    label: "Column 7"
  }
];

storiesOf("Components|Table", module)
  .add("default", () => ({
    components: {
      TrtTable
    },
    data() {
      return {
        rows: rows
      };
    },
    template: `
      <trt-table :rows="rows">
      </trt-table>
    `
  }))
  .add("with headers", () => ({
    components: {
      TrtTable
    },
    data() {
      return {
        rows: rows,
        headers: headers
      };
    },
    template: `
      <trt-table :rows="rows" :headers="headers">
      </trt-table>
    `
  }))
  .add("with caption", () => ({
    components: {
      TrtTable
    },
    data() {
      return {
        rows: rows,
        headers: headers
      };
    },
    template: `
      <trt-table :rows="rows" :headers="headers">
        Table caption
      </trt-table>
    `
  }))
  .add("with general slots", () => ({
    components: {
      TrtTable
    },
    data() {
      return {
        rows: rows,
        headers: headers
      };
    },
    template: `
      <trt-table :rows="rows" :headers="headers">
        <template v-slot:header="{ header }">
          <small>General override:</small><br>
          {{ header.label }}
        </template>

        <template v-slot:cell="{ cell }">
          <small>General override:</small><br>
          <a v-if="!!cell.path" :href="cell.path">{{ cell.value }}</a>
          <template v-else>{{ cell.value }}</template>
        </template>
      </trt-table>
    `
  }))
  .add("with column slots", () => ({
    components: {
      TrtTable
    },
    data() {
      return {
        rows: rows,
        headers: headers
      };
    },
    template: `
      <trt-table :rows="rows" :headers="headers">
        <template v-slot:header-column1="{ header }">
          <small>Column override:</small><br>
          {{ header.label }}
        </template>

        <template v-slot:cell-column6="{ cell }">
          <small>Column override:</small><br>
          <a :href="cell.path">{{ cell.value }}</a>
        </template>
      </trt-table>
    `
  }))
  .add("with general and column slots", () => ({
    components: {
      TrtTable
    },
    data() {
      return {
        rows: rows,
        headers: headers
      };
    },
    template: `
      <trt-table :rows="rows" :headers="headers">
        <template v-slot:header="{ header }">
          <small>General override:</small><br>
          {{ header.label }}
        </template>

        <template v-slot:cell="{ cell }">
          <small>General override:</small><br>
          {{ cell.value }}
        </template>

        <template v-slot:header-column1="{ header }">
          <small>Column override:</small><br>
          {{ header.label }}
        </template>

        <template v-slot:cell-column6="{ cell }">
          <small>Column override:</small><br>
          <a :href="cell.path">{{ cell.value }}</a>
        </template>
      </trt-table>
    `
  }));
