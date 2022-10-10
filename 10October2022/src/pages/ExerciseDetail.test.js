import React from "react";
import { shallow, mount } from "enzyme";
import ExerciseDetail from "./ExerciseDetail";
import ReactRouter from "react-router";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<ExerciseDetail />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render component of useState", () => {
    let setExerciseDetail = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([true, setExerciseDetail]);
    const wrapper = shallow(<ExerciseDetail />);

    wrapper.update();
  });
});

describe("render component with function", () => {
  test("should render component without error", () => {
    let componentFun = {
      fetchExercisesData: jest.fn(),
    };
    const wrapper = shallow(<ExerciseDetail {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("render component with function..", () => {
  test("should render component without error", () => {
    let componentFun = {
      setEquipmentExercises: jest.fn(),
    };
    const wrapper = shallow(<ExerciseDetail {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });

  let setup = () => shallow(<ExerciseDetail />);
  test("render component without crashing", () => {
    let wrapper = setup();
    // console.log(wrapper.debug());
    let component = wrapper.find("[data-testid='component-list']");
    expect(component.length).toBe(1);
  });
});
