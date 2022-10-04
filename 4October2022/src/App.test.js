import { render, screen } from "@testing-library/react";
import HeroBanner from "./components/HeroBanner";
describe("login testing", () => {
  test("renders Loginpage without crashing", () => {
    render(<HeroBanner />);
    const element = screen.getByTestId("form");
    expect(element).toBeInTheDocument();
  });
});
