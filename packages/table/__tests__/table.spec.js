/* global describe, it, expect */

import { shallowMount } from "@vue/test-utils";
import TrtTable from "../src";

describe("Table.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TrtTable, {
      slots: {
        default: [msg]
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
