import React from "react"
import renderer from "react-test-renderer"

import Task, { TaskProps } from "./Task"

const videoTask: TaskProps = {
  task: {
    id: "t1",
    title: "Bootcamp Overview",
    type: "video",
    url: "https://www.youtube.com/watch?v=gAprO6lGizM",
    length: "1m 24s",
    progress: 100,
  },
}

const renderTask = () => {
  return renderer.create(<Task {...videoTask} />)
}

describe("Task Component", () => {
  it("renders as expected", () => {
    const tree = renderTask().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should return VideoTask component for task type video", () => {
    const expectedTaskType = typeof (<Task {...videoTask} />)
    const videoTaskComponentType = typeof renderTask()
    expect(videoTaskComponentType).toBe(expectedTaskType)
  })
})
