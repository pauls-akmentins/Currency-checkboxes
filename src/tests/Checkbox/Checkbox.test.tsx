import { render, screen } from "@testing-library/react";
import Checkbox from "../../shared/checkbox/Checkbox";

describe("Checkbox component", () => {
  it("should render", () => {
    render(<Checkbox checkboxContent="Test Currency" isChecked={false} />);

    expect(screen.getByTestId("checkbox")).toBeInTheDocument();
  });

  it("should have content of 'Test Currency'", () => {
    render(<Checkbox checkboxContent="Test Currency" isChecked={false} />);

    expect(screen.getByTestId("checkbox-content")).toHaveTextContent(
      "Test Currency"
    );
  });

  it("should not be checked", () => {
    render(<Checkbox checkboxContent="Test Currency" isChecked={false} />);

    expect(screen.getByTestId("checkbox-input")).toHaveTextContent("");
  });

  it("should be checked", () => {
    render(<Checkbox checkboxContent="Test Currency" isChecked={true} />);

    expect(screen.getByTestId("checkbox-input")).toHaveTextContent("X");
  });
});
