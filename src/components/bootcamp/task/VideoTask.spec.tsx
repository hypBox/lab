import React from "react"
import renderer from "react-test-renderer"
import VideoTask, { VideoTaskProps } from "./VideoTask"

const completedHandler = jest.fn()

jest.mock("react-player", () => {
  const ReactPlayer = (props: any) => {
    props.onProgress({ played: 100 })
    return <div></div>
  }
  return ReactPlayer
})

const props: VideoTaskProps = {
  onCompleted: completedHandler,
  task: {
    id: "t1",
    title: "Bootcamp Overview",
    type: "video",
    url: "",
    length: "1m 24s",
    progress: 100,
  },
}

describe("Video Task Component", () => {
  it("renders as expected", () => {
    const root = renderer.create(<VideoTask {...props} />).toJSON()
    expect(root).toMatchSnapshot()
  })

  it("should call onCompleted callback when video completed", () => {
    renderer.create(<VideoTask {...props} />)
    expect(completedHandler).toBeCalled()
  })
})
