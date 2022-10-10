import React from "react";
import { shallow, mount } from "enzyme";

import Detail from "./Detail";

describe("render component with props", () => {
  test("should render component", () => {
    let componentProps = {
      exerciseDetail: {
        bodyPart: "upper legs",
        equipment: "barbell",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0042.gif",
        id: "0042",
        name: "barbell front squat",
        target: "glutes",
      },
    };
    const wrapper = shallow(<Detail {...componentProps} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render component with data", () => {
    let componentProps = {
      exerciseDetail: {
        bodyPart: "chest",
        equipment: "barbell",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0036.gif",
        id: "0036",
        name: "barbell decline wide-grip press",
        target: "pectorals",
      },
    };

    const wrapper = shallow(<Detail {...componentProps} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render component with api data", () => {
    let componentProps = {
      exerciseDetail: {
        bodyPart: "upper legs",
        equipment: "barbell",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1462.gif",
        id: "1462",
        name: "barbell full squat (side pov)",
        target: "glutes",
      },
    };
    const wrapper = shallow(<Detail {...componentProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
