import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider as ReduxProvider } from "react-redux"
import configStore from "../redux/configStore"

import Bootcamp from "./Bootcamp"

describe("Bootcamp", () => {
  const renderBootcampPage = () => {
    const store = configStore()
    return render(
      <ReduxProvider store={store}>
        <Bootcamp />
      </ReduxProvider>
    )
  }

  it("renders as expected", () => {
    const tree = renderBootcampPage()
    expect(tree).toMatchSnapshot()
  })

  it("verifies progressSidebar is shown", () => {
    const tree = renderBootcampPage()
    const sidebar = tree.findByTestId("progress-sidebar")
    expect(sidebar).toBeTruthy()
  })

  it("hides progressSidebar", async (done) => {
    const { queryByTestId, getByRole } = renderBootcampPage()
    const button = getByRole("toggle-progress-sidebar")
    fireEvent.click(button)
    const progressSidebar = await queryByTestId("progress-sidebar")
    expect(progressSidebar).toBeFalsy()
    done()
  })
})
