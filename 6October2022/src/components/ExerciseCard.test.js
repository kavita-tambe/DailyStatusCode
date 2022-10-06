import React from "react";
import { shallow, mount } from "enzyme";

import ExerciseCard from "./ExerciseCard";

describe("render component with props", () => {
  test("should render component", () => {
    let componentProps = {
      exercise: {
        bodyPart: "back",
        equipment: "barbell",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1316.gif",
        id: "1316",
        name: "barbell bent arm pullover",
        target: "lats",
      },
    };
    const wrapper = shallow(<ExerciseCard {...componentProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
