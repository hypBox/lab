import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { MuiThemeProvider } from "./components/material/core"
import theme from "./components/material/theme"
import * as serviceWorker from "./serviceWorker"
import configStore from "./redux/configStore"
import { Provider as ReduxProvider } from "react-redux"

const store = configStore({ theme: true })

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
