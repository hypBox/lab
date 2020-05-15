import React from "react"
import renderer from "react-test-renderer"

import Login from "./Signin"

describe("Dashboard", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<Login />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
