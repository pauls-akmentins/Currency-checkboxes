import { render, screen } from "@testing-library/react";
import SelectedCheckbox from "../../shared/selectedCheckbox/SelectedCheckbox";

describe("SelectedCheckbox component", () => {
  it("should render", () => {
    render(<SelectedCheckbox selectedCurrency="Test Currency" />);

    expect(screen.getByTestId("selected-checkbox")).toBeInTheDocument();
  });

  it("should have content of 'Test Currency'", () => {
    render(<SelectedCheckbox selectedCurrency="Test Currency" />);

    expect(screen.getByTestId("selected-checkbox-content")).toHaveTextContent(
      "Test Currency"
    );
  });
});
