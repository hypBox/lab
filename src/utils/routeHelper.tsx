import React from "react"
import constants from "../config"
import { Route } from "react-router-dom"

export const getRoutes = () => {
  const { pages } = constants
  return Object.keys(pages).map((key) => {
    const page = pages[key]
    return <Route {...page} key={page.title} />
  })
}
