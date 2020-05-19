import React from "react"
import renderer from "react-test-renderer"

import ProgressSidebar, { ProgressSidebarProps } from "./ProgressSidebar"

describe("ProgressSidbar", () => {
  const task = {
    id: "t1",
    title: "Bootcamp Overview",
    type: "video",
    length: "5m 14s",
    progress: 100,
  }

  const milestone = {
    id: "m1",
    title: "Overview",
    progress: 100,
    tasks: [task],
  }
  const bootcamp = {
    id: "b1",
    title: "Python For Beginners",
    progress: 12.4,
    currentTask: {
      milestoneId: "m2",
      taskId: "t4",
    },
    milestones: [milestone],
  }
  const props: ProgressSidebarProps = {
    bootcamp,
    onMilestoneClick: jest.fn(),
    onTaskClick: jest.fn(),
    selectedMilestone: milestone,
    selectedTask: task,
  }

  it("renders as expected", () => {
    const tree = renderer.create(<ProgressSidebar {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
