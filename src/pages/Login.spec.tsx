import React from "react"
import renderer from "react-test-renderer"

import Login from "./Login"

describe("Dashboard", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<Login />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
