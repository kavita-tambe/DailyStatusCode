import React from "react";
import { shallow, mount } from "enzyme";
import SearchExercises from "./SearchExercises";

describe("render component", () => {
  test("should render component with useState", () => {
    const wrapper = shallow(<SearchExercises />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render component of useState", () => {
    let setBodyParts = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([true, setBodyParts]);
    const wrapper = shallow(<SearchExercises />);

    wrapper.update();
  });

  test("should render component with function", () => {
    let componentFun = {
      handleSearch: jest.fn(),
    };
    const wrapper = shallow(<SearchExercises {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render component with function..", () => {
    let componentFun = {
      setSearch: jest.fn(),
    };
    const wrapper = shallow(<SearchExercises {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });
  let setup = () => shallow(<SearchExercises />);
  test("render component without crashing", () => {
    let wrapper = setup();
    // console.log(wrapper.debug());
    let component = wrapper.find("[data-testid='component-list-user']");
    expect(component.length).toBe(1);
  });

  // test("should render component with api data", () => {
  //   let componentProps = {
  //     setExercises: {
  //       bodyPart: "waist",
  //       equipment: "assisted",
  //       gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0011.gif",
  //       id: "0011",
  //       name: "assisted hanging knee raise",
  //       target: "abs",
  //     },
  //   };
  //   let componentPropsone = {
  //     bodyPart: {
  //       bodyPart: "waist",
  //       equipment: "body weight",
  //       gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0467.gif",
  //       id: "0467",
  //       name: "gorilla chin",
  //       target: "abs",
  //     },
  //   };
  //   let componentProptwo = {
  //     setBodyPart: {
  //       bodyPart: "waist",
  //       equipment: "body weight",
  //       gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0467.gif",
  //       id: "0467",
  //       name: "gorilla chin",
  //       target: "abs",
  //     },
  //   };
  //   const wrapper = shallow(
  //     <SearchExercises
  //       {...componentProps}
  //       {...componentPropsone}
  //       {...componentProptwo}
  //     />
  //   );
  //   expect(wrapper.exists()).toBe(true);
  // });
});
