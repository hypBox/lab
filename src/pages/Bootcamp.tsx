import React, { useState, useEffect } from "react"

import { Grid, Button } from "../components/material/core"
import { makeStyles } from "../components/material/styles"
import Milestone from "../components/bootcamp/Milestone"

const useStyles = makeStyles((theme) => ({
  main: {},
  progress: {
    backgroundColor: "green",
  },
  content: {
    backgroundColor: "yellow",
  },
}))

const Bootcamp = () => {
  const classes = useStyles()
  const [showing, setShowing] = useState(true)
  const getSize = (isShowing: boolean): any =>
    isShowing
      ? { xs: 12, sm: 8, md: 9, lg: 10, xl: 11 }
      : { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }
  const [size, setSize] = useState(getSize(showing))

  useEffect(() => {
    setSize(getSize(showing))
  }, [showing])
  const getText = () => (showing ? "Hide" : "Show")
  const clickHandler = () => {
    setShowing(!showing)
  }

  return (
    <Grid container className={classes.main} direction="row">
      <Grid {...size} item className={classes.content}>
        <Button variant="contained" onClick={clickHandler} color="primary">
          {getText()}
        </Button>
      </Grid>

      {showing && (
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={2}
          xl={1}
          className={classes.progress}
        >
          <Milestone />
        </Grid>
      )}
    </Grid>
  )
}

export default Bootcamp
