import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const TEST_TODO = {
  id: 1,
  title: 'Test',
  description: 'Test Description',
  priority: 1};

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<Todo todo={TEST_TODO}/>);
  });

  it("contains expected title", function () {
    const { container, debug } = render(<Todo todo={TEST_TODO}/>);
    const todoDiv = container.querySelector(".Todo");
    expect(todoDiv).toContainHTML("<b>Test</b>");
  });

  it("contains expected description", function () {
    const result = render(<Todo todo={TEST_TODO}/>);
    expect(result.queryByText("Test Description")).toBeInTheDocument();
  });

  it("contains expected priority", function () {
    const result = render(<Todo todo={TEST_TODO}/>);
    expect(result.queryByText("(priority: 1)")).toBeInTheDocument();
  });

  //TODO: SNAPSHOT
});