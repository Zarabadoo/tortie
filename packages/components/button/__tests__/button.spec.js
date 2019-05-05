/* global describe, it, expect */

import { shallowMount } from "@vue/test-utils";
import TrtButton from "../src";

describe("Button.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TrtButton, {
      slots: {
        default: [msg]
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
