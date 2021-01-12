import React from "react";
import { render } from "@testing-library/react";
import HomepageV0 from "../Components/Homepage/HomepageV0";

test("renders learn react link", () => {
    const { getByText } = render(<HomepageV0 />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
