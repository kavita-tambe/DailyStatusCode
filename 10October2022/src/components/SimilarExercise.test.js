import React from "react";
import { shallow, mount } from "enzyme";

import SimilarExercises from "./SimilarExercises";

describe("render component with props", () => {
  test("should render component with api data", () => {
    let componentProps = {
      targetMuscleExercises: {
        bodyPart: "waist",
        equipment: "assisted",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0011.gif",
        id: "0011",
        name: "assisted hanging knee raise",
        target: "abs",
      },
    };
    let componentPropsone = {
      equipmentExercises: {
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0467.gif",
        id: "0467",
        name: "gorilla chin",
        target: "abs",
      },
    };
    const wrapper = shallow(
      <SimilarExercises {...componentProps} {...componentPropsone} />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
