import React from "react"
import renderer from "react-test-renderer"
import Milestone, { MilestoneProps } from "./Milestone"

describe("Milestone", () => {
  it("renders as expected", () => {
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

    const props: MilestoneProps = {
      milestone,
      onMilestoneClick: jest.fn(),
      onTaskClick: jest.fn(),
      selectedMilestone: milestone,
      selectedTask: task,
    }

    const tree = renderer.create(<Milestone {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
