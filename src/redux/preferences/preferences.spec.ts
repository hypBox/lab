import { toggleDarkMode, actions } from "./preferencesActions"
import reducer from "./preferencesReducer"

describe("Action Creators", () => {
  it("should create a TOGGLE_DARK_MODE action", () => {
    //Arange
    const expectedAction = { type: actions.TOGGLE_DARK_MODE }

    //Act
    const action = toggleDarkMode()

    //Assert
    expect(action).toEqual(expectedAction)
  })
})

describe("Reducers", () => {
  it("should return new state with darkMode set to false", () => {
    const action = toggleDarkMode()
    const newState = reducer(undefined, action)
    expect(newState.darkMode).toBeTruthy()
  })
})
