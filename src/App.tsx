import React from "react"
import { Route, Switch } from "react-router-dom"

import PageNotFound from "./pages/PageNotFound"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"

function App() {
  return (
    <>
      <h1>This is header</h1>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  )
}

export default App
