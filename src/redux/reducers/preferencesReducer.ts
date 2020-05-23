import { PreferencesActions, actions } from "../actions/preferencesActions"

export interface PreferencesState {
  darkMode: boolean
}

const initState: PreferencesState = { darkMode: false }

const preferencesReducer = (state = initState, action: PreferencesActions) => {
  switch (action.type) {
    case actions.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode }
    default:
      return state
  }
}

export default preferencesReducer
