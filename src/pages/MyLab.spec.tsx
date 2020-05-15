import React from "react"
import renderer from "react-test-renderer"

import MyLab from "./MyLab"

describe("My Lab", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<MyLab />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
