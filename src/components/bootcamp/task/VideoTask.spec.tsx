import React from "react"
import renderer from "react-test-renderer"

import VideoTask, { VideoTaskProps } from "./VideoTask"

describe("Video Task Component", () => {
  it("renders as expected", () => {
    const props: VideoTaskProps = {
      onCompleted: jest.fn(),
      task: {
        id: "t1",
        title: "Bootcamp Overview",
        type: "video",
        url: "https://www.youtube.com/watch?v=gAprO6lGizM",
        length: "1m 24s",
        progress: 100,
      },
    }
    const root = renderer.create(<VideoTask {...props} />).toJSON()
    expect(root).toMatchSnapshot()
  })
})
