import { UpdateThemeAction, actions } from "../actions/themeActions"

const themeReducer = (state = false, action: UpdateThemeAction) => {
  switch (action.type) {
    case actions.UPDATE_THEME:
      return action.darkTheme
    default:
      return state
  }
}

export default themeReducer
