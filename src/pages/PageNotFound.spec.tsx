import React from "react"
import renderer from "react-test-renderer"

import PageNotFound from "./PageNotFound"

describe("Dashboard", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<PageNotFound />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
