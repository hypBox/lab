import React from "react"
import renderer from "react-test-renderer"

import Signin from "./Signin"

describe("Signin", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<Signin />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
