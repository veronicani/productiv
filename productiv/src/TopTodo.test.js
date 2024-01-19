import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const TEST_1 = {
  id : 1,
  title : "test1",
  description : "test1 description",
  priority : 3
}

const TEST_2 = {
  id : 2,
  title : "test2",
  description : "test2 description",
  priority : 2
}

const TEST_3 = {
  id : 3,
  title : "test3",
  description : "test3 description",
  priority : 11
}

const TODOS = [TEST_1, TEST_2, TEST_3]

describe("TopTodo", function(){
  it("renders highest priority todo", function(){
    const result = render(<TopTodo todos={TODOS}/>);
    expect(result.queryByText("test2")).toBeInTheDocument();
    expect(result.queryByText("test3")).not.toBeInTheDocument();
  })
})



