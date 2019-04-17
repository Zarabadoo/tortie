<template>
  <table class="trt-table">
    <caption
      class="trt-table__caption"
      v-if="!!$slots.default || !!$scopedSlots.default"
    >
      <slot></slot>
    </caption>

    <thead class="trt-table__thead">
      <tr class="trt-table__row">
        <th
          class="trt-table__head"
          v-for="(header, h) in processedHeaders"
          :key="h"
        >
          <slot :name="`header-${header.id}`" :header="header">
            <slot name="header" :header="header">
              {{ header.label }}
            </slot>
          </slot>
        </th>
      </tr>
    </thead>

    <tbody class="trt-table__body">
      <tr class="trt-table__row" v-for="(row, r) in rows" :key="r">
        <td
          class="trt-table__cell"
          v-for="(header, c) in processedHeaders"
          :key="c"
        >
          <slot
            :name="`cell-${header.id}`"
            :cell="getColumn(header.id, row)"
            :row="row"
          >
            <slot name="cell" :cell="getColumn(header.id, row)" :row="row">
              {{ getColumn(header.id, row).value }}
            </slot>
          </slot>
        </td>
      </tr>
    </tbody>

    <tfoot v-if="!!footers" class="trt-table__foot">
      <tr class="trt-table__row">
        <td class="trt-table__cell">Foot</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "TrtTable",
  props: {
    footers: {
      type: Array,
      default: null
    },
    headers: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    processedHeaders() {
      const columns = [].concat(
        ...this.rows.map(row => {
          return row.columns.map(column => {
            return column.column;
          });
        })
      );

      return columns
        .filter((column, i) => {
          return columns.indexOf(column) === i;
        })
        .map((id, index) => {
          const config = this.headers.filter(h => {
            return h.id === id;
          });

          if (config.length === 1) {
            config[0].weight = config[0].weight || index;
            return config[0];
          }

          return {
            id: id,
            label: id,
            weight: index
          };
        })
        .sort((a, b) => {
          return a.weight - b.weight;
        });
    }
  },
  methods: {
    getColumn(id, row) {
      return row.columns.filter(column => {
        return column.column === id;
      })[0];
    }
  }
};
</script>

<style lang="scss">
.trt-table {
  $_parent: &;

  width: 100%;
  margin: 1rem 0;
  border-collapse: collapse;
  font-family: sans-serif;
  color: rgba(#000, 0.88);

  &__row {
    border-bottom: 1px solid #888;

    &:first-child {
      border-top: 1px solid #888;
    }
  }

  &__head,
  &__cell {
    padding: 0.3rem;
    text-align: left;

    + #{$_parent}__head,
    + #{$_parent}__cell,
    &:first-child {
      border-left: 1px solid #888;
    }

    &:last-child {
      border-right: 1px solid #888;
    }
  }

  &__head {
    vertical-align: bottom;
    color: rgba(#fff, 0.88);
    font-weight: bold;
    background: rgba(#000, 0.4);
  }

  &__cell {
    vertical-align: top;
    background: rgba(#fff, 0.8);
  }

  &__caption {
    padding: 0.3rem;
    font: {
      size: 0.8rem;
      style: italic;
    }
  }
}
</style>
