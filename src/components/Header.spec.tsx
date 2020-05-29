import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider as ReduxProvider } from "react-redux"
import configStore from "../redux/configStore"
import Header from "./Header"

const store = configStore()

describe("Header", () => {
  const renderHeader = () =>
    render(
      <ReduxProvider store={store}>
        <Header />
      </ReduxProvider>
    )

  it("should user menu items should not be shown by default", () => {
    const tree = renderHeader()
    expect(tree.queryByText("My Lab")).toBeFalsy()
    expect(tree.queryByText("Profile")).toBeFalsy()
    expect(tree.queryByText("Sign out")).toBeFalsy()
  })

  it("should display current user menu when menu is clicked on", () => {
    const tree = renderHeader()
    const userMenuButton = tree.getByLabelText("current-user")
    fireEvent.click(userMenuButton)
    expect(tree.queryByText("My Lab")).toBeTruthy()
    expect(tree.queryByText("Profile")).toBeTruthy()
    expect(tree.queryByText("Sign out")).toBeTruthy()
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
