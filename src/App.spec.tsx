import React from "react"
import renderer from "react-test-renderer"
import App from "./App"
import { Provider as ReduxProvider } from "react-redux"
import configStore from "./redux/configStore"

const store = configStore()

describe("App", () => {
  it("renders as expected", () => {
    const tree = renderer
      .create(
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
