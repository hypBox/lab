import React from "react"
import renderer from "react-test-renderer"
import { Provider as ReduxProvider } from "react-redux"
import configStore from "../redux/configStore"

import MyLab from "./MyLab"

const store = configStore()

describe("My Lab", () => {
  it("renders as expected", () => {
    const tree = renderer
      .create(
        <ReduxProvider store={store}>
          <MyLab />
        </ReduxProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
