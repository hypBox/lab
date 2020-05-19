import React from "react"
import renderer from "react-test-renderer"

import Task, { TaskProps } from "./Task"

describe("Task Component", () => {
  it("renders as expected", () => {
    const props: TaskProps = {
      task: {
        id: "t1",
        title: "Bootcamp Overview",
        type: "video",
        url: "https://www.youtube.com/watch?v=gAprO6lGizM",
        length: "1m 24s",
        progress: 100,
      },
    }
    const root = renderer.create(<Task {...props} />).toJSON()
    expect(root).toMatchSnapshot()
  })
})
