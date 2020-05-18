import React from "react"
import renderer from "react-test-renderer"
import { render, fireEvent } from "@testing-library/react"

import Bootcamp from "./Bootcamp"
import ProgressSidebar from "../components/bootcamp/ProgressSidebar/ProgressSidebar"

describe("Bootcamp", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<Bootcamp />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("verifies progressSidebar is shown", () => {
    const { root: instance } = renderer.create(<Bootcamp />)
    const sidebar = instance.findByType(ProgressSidebar)
    expect(sidebar).toBeTruthy()
  })

  it("hides progressSidebar", async (done) => {
    const { getByText, queryByTestId } = render(<Bootcamp />)
    const button = getByText("Hide")
    fireEvent.click(button)
    const progressSidebar = await queryByTestId("progress-sidebar")
    expect(progressSidebar).toBeFalsy()
    done()
  })
})
