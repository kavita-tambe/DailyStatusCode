import { render, screen } from "@testing-library/react";
import HeroBanner from "./components/HeroBanner";
import React from "react";

describe("login testing", () => {
  test("renders Loginpage without crashing", () => {
    render(<HeroBanner />);
    const element = screen.getByTestId("form");
    expect(element).toBeInTheDocument();
  });
});
// describe("render Exercise Card component", () => {
//   test("render Exercise Card component without crashing", () => {
//     jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: "0001" });
//     const wrapper = shallow(<ExerciseDetail />);

//     expect(wrapper.length).toBe(1);
//   });
// });
