import React from "react"
import renderer from "react-test-renderer"

import Task from "./Task"
import { TaskProps } from "./Task"

describe("Task Component", () => {
  it("renders as expected", () => {
    const task = {
      id: "t1",
      progress: 80,
      title: "TASK 1",
      type: "task",
      length: "LENGTH",
    }

    const taskProps: TaskProps = {
      onclick: jest.fn(),
      selectedTask: task,
      task,
    }

    const tree = renderer.create(<Task {...taskProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
