/* eslint-disable no-undef */
import { a } from "./a";
import { mount } from "@vue/test-utils";
import Foo from "@/components/Foo.vue";

test("1+1=2", () => {
  console.log(a());
  console.log(mount(Foo));
  expect(1 + 1).toBe(2);
});
