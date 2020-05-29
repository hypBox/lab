import React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"
import { Provider as ReduxProvider } from "react-redux"
import configStore from "../redux/configStore"
import Header from "./Header"

const store = configStore()

afterEach(() => {
  cleanup()
})

describe("Header", () => {
  const renderHeader = () =>
    render(
      <ReduxProvider store={store}>
        <Header />
      </ReduxProvider>
    )

  it("should user menu items should not be shown by default", () => {
    const tree = renderHeader()
    expect(tree.queryByLabelText("menu-appbar")).toBeFalsy()
  })

  it("should toggle current user menu when menu is clicked twice", async () => {
    const tree = renderHeader()
    const userMenuButton = tree.getByLabelText("current-user")
    fireEvent.click(userMenuButton)
    expect(tree.findByLabelText("menu-appbar")).toBeTruthy()
    fireEvent.click(tree.getByText("My Lab"))
    expect(tree.queryByLabelText("menu-appbar")).toBeFalsy()
  })

  it("should display light theme by default", () => {
    const tree = renderHeader()
    expect(tree.getByTestId("enable-dark-theme")).toBeTruthy()
    expect(tree.queryByTestId("enable-light-theme")).toBeFalsy()
  })

  it("should change theme to dark", () => {
    const tree = renderHeader()
    const toggleThemeButton = tree.getByTestId("enable-dark-theme")
    fireEvent.click(toggleThemeButton)
    expect(tree.queryByTestId("enable-dark-theme")).toBeFalsy()
    expect(tree.getByTestId("enable-light-theme")).toBeTruthy()
  })
})
