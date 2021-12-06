import { mount } from "@vue/test-utils";
import FocusInput from "./FocusInput";

const FocusInputFactory = () => {
  return mount(FocusInput, {
    attachTo: document.body,
  });
};

describe("FocusInput with attach", () => {
  const wrapper = FocusInputFactory();

  it("Detects focus if it's on alternate elements", async () => {
    const input1 = wrapper.find('#input1');
    const input2 = wrapper.find('#input2');

    await input1.trigger('focus');
    expect(wrapper.vm.focused).toBe(true);
    await input1.trigger('blur');
    expect(wrapper.vm.focused).toBe(false);
    await input2.trigger('focus');
    expect(wrapper.vm.focused).toBe(true);
  });

  it("Detects focus if it's on the same element", async () => {
    const input1 = wrapper.find('#input1');

    await input1.trigger('focus');
    expect(wrapper.vm.focused).toBe(true);
    await input1.trigger('blur');
    expect(wrapper.vm.focused).toBe(false);
    await input1.trigger('focus');
    expect(wrapper.vm.focused).toBe(true);
  });
});

