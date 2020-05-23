import React, { FC } from "react"
import { MuiThemeProvider, createMuiTheme } from "../material/core"
import { connect, ConnectedProps } from "react-redux"
import hypTheme from "./hypBoxTheme"
import { AppState } from "../../redux/configStore"
import theme from "./hypBoxTheme"

const mapState = (state: AppState) => {
  const {
    preferences: { darkMode },
  } = state
  return {
    darkMode,
  }
}
const connector = connect(mapState)
type PropsFromRedux = ConnectedProps<typeof connector>

const ThemeProvoider: FC<PropsFromRedux> = ({ children, darkMode }) => {
  const newTheme = createMuiTheme({
    ...hypTheme,
    palette: { type: darkMode ? "dark" : "light" },
  })
  return <MuiThemeProvider theme={newTheme}>{children}</MuiThemeProvider>
}

export default connector(ThemeProvoider)
