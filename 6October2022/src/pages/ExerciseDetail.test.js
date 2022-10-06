import React from "react";
import { shallow, mount } from "enzyme";
import ExerciseDetail from "./ExerciseDetail";
import ReactRouter from "react-router";
describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<ExerciseDetail />);
    expect(wrapper.exists()).toBe(true);
  });
});
