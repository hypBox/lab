import React from "react"
import renderer from "react-test-renderer"

import PageNotFound from "./PageNotFound"

describe("Page Not Found", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<PageNotFound />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
