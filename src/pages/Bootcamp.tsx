import React, { useState, useEffect } from "react"

import { Grid, Button } from "../components/material/core"
import { makeStyles } from "../components/material/styles"
import ProgressSidebar from "../components/bootcamp/progressSidebar"
import { bootcampData } from "../api"
import { ITask, IMilestone } from "../types"
import Task from "../components/bootcamp/task"

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
  const [showingPrgbar, setShowingPrgbar] = useState(true)
  const getSize = (isShowing: boolean): any =>
    isShowing
      ? { xs: 12, sm: 8, md: 9, lg: 10, xl: 11 }
      : { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }
  const [size, setSize] = useState(getSize(showingPrgbar))

  const [selectedTask, setTask] = useState<ITask>(
    bootcampData.milestones[0].tasks[0]
  )
  const [selectedMilestone, setMilestone] = useState<IMilestone>(
    bootcampData.milestones[0]
  )

  const milestoneClickHandler = (milestone: IMilestone) => {
    setMilestone(milestone)
  }

  const taskClickHandler = (task: ITask) => {
    setTask(task)
  }

  useEffect(() => {
    console.log("selectedTask", selectedTask) // handle change
  }, [selectedTask])

  useEffect(() => {
    setSize(getSize(showingPrgbar))
  }, [showingPrgbar])

  const getText = () => (showingPrgbar ? "Hide" : "Show")

  const clickHandler = () => {
    setShowingPrgbar(!showingPrgbar)
  }

  return (
    <Grid container className={classes.main} direction="row">
      <Grid {...size} item className={classes.content}>
        <Task task={selectedTask} />
        <Button variant="contained" onClick={clickHandler} color="primary">
          {getText()}
        </Button>
        {selectedMilestone.title} >> {selectedTask.title}
      </Grid>

      {showingPrgbar && (
        <Grid
          data-testid="progress-sidebar"
          item
          xs={12}
          sm={4}
          md={3}
          lg={2}
          xl={1}
          className={classes.progress}
        >
          <ProgressSidebar
            onMilestoneClick={milestoneClickHandler}
            onTaskClick={taskClickHandler}
            selectedMilestone={selectedMilestone}
            selectedTask={selectedTask}
            bootcamp={bootcampData}
          />
        </Grid>
      )}
    </Grid>
  )
}

export default Bootcamp
