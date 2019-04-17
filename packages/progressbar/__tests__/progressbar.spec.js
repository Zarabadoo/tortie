/* global describe, it, expect */

import { shallowMount } from "@vue/test-utils";
import TrtProgreessbar from "../src";

describe("Table.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TrtProgreessbar, {
      slots: {
        default: [msg]
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
