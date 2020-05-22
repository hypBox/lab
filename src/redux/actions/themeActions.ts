export const actions = {
  UPDATE_THEME: "UPDATE_THEME",
}

export const updateTheme = (darkTheme: boolean = false) => ({
  type: actions.UPDATE_THEME,
  darkTheme,
})

export interface UpdateThemeAction {
  type: string
  darkTheme: boolean
}
