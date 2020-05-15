import React from "react"
import { Switch } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { getRoutes } from "./utility/routeHelper"

function App() {
  return (
    <>
      <h1>This is header</h1>
      <Router>
        <Switch>{getRoutes()}</Switch>
      </Router>
    </>
  )
}

export default App
