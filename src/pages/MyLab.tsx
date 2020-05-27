import React from "react"
import Header from "../components/Header"
import { makeStyles, createStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      height: "100vh",
      backgroundColor: theme.palette.background.default,
    },
  })
)

const MyLab = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Header />
      <h1>THis is MyLab</h1>
    </div>
  )
}

export default MyLab
