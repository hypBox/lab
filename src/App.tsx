import React from "react"
import { Route, Switch } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

import PageNotFound from "./pages/PageNotFound"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <h1>This is header</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App
