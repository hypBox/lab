import React from "react"
//import { render } from "@testing-library/react" // ISSUE 32 - fails with this but not with line 4
import VideoTask, { VideoTaskProps } from "./VideoTask"
import renderer from "react-test-renderer"

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

// const renderComponent = () => render(<VideoTask {...props} />)

describe("Video Task Component", () => {
  it("renders as expected", () => {
    //const tree = renderComponent()
    const tree = renderer.create(<VideoTask {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
