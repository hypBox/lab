import React from "react"
import { render } from "@testing-library/react"
import VideoTask, { VideoTaskProps } from "./VideoTask"

jest.mock("react-player", () => {
  const ReactPlayer = (props: any) => {
    props.onProgress({ played: 100 })
    return <div></div>
  }
  return ReactPlayer
})

const props: VideoTaskProps = {
  onProgress: jest.fn(),
  task: {
    id: "t1",
    title: "Bootcamp Overview",
    type: "video",
    url: "",
    length: "1m 24s",
    progress: 100,
  },
}

const renderComponent = () => render(<VideoTask {...props} />)

describe("Video Task Component", () => {
  it("renders as expected", () => {
    const { container } = renderComponent()
    expect(container.firstChild).toMatchSnapshot()
  })
})
