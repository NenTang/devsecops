/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByTestId("test")).toHaveTextContent("Xin chào Dương Nguyễn Phú Cường | DevSecOps");
});
