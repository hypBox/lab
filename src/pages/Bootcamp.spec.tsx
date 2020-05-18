import React from "react"
import renderer from "react-test-renderer"
import Bootcamp from "./Bootcamp"
import ProgressSidebar from "../components/bootcamp/ProgressSidebar"

describe("Bootcamp", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<Bootcamp />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should hide progressSidebar", () => {
    const { root: instance } = renderer.create(<Bootcamp />)
    const sidebar = instance.findByType(ProgressSidebar)
    expect(sidebar).toBeTruthy()
  })
})
