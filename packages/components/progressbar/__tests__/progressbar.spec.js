/* global describe, it, expect */

import { shallowMount } from "@vue/test-utils";
import { TrtProgressbar, TrtProgressbarLinear } from "../src";

describe("Progressbar.vue", () => {
  it("renders slot", () => {
    const msg = "new message";
    const wrapper = shallowMount(TrtProgressbar, {
      slots: {
        default: [msg]
      },
      propData: {
        valuenow: "40"
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("ProgressbarLinear.vue", () => {
  it("renders slot", () => {
    const msg = "new message";
    const wrapper = shallowMount(TrtProgressbarLinear, {
      slots: {
        default: [msg]
      },
      propData: {
        valuenow: "40"
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
