export const actions = {
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
}

export const toggleDarkMode = (): PreferencesActions => {
  return { type: actions.TOGGLE_DARK_MODE }
}

interface ToggleDarkModeAction {
  type: string
}

export type PreferencesActions = ToggleDarkModeAction
