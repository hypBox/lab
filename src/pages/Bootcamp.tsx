import React, { useState, useEffect } from "react"

import { Grid } from "../components/material/core"
import { makeStyles } from "../components/material/styles"
import ProgressSidebar from "../components/bootcamp/progressSidebar"
import { bootcampData } from "../api"
import { ITask, IMilestone } from "../types"
import Task from "../components/bootcamp/task"
import BootcampHeader from "../components/bootcamp/BootcampHeader"
const useStyles = makeStyles((theme) => ({
  main: {},
  content: {
    backgroundColor: "yellow",
    height: "100vh",
  },
}))

const Bootcamp = () => {
  const classes = useStyles()
  const [showingPrgbar, setShowingPrgbar] = useState(true)
  const getSize = (isShowing: boolean): any =>
    isShowing
      ? { xs: 12, sm: 8, md: 9, lg: 10 }
      : { xs: 12, sm: 12, md: 12, lg: 12 }
  const [size, setSize] = useState(getSize(showingPrgbar))

  useEffect(() => {
    setSize(getSize(showingPrgbar))
  }, [showingPrgbar])

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

  const clickHandler = () => {
    setShowingPrgbar(!showingPrgbar)
  }

  return (
    <>
      <Grid container className={classes.main} direction="row">
        <Grid {...size} item className={classes.content}>
          <BootcampHeader onButtonClick={clickHandler} task={selectedTask} />
          <Task task={selectedTask} />
        </Grid>

        {showingPrgbar && (
          <Grid
            data-testid="progress-sidebar"
            item
            xs={12}
            sm={4}
            md={3}
            lg={2}
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
    </>
  )
}

export default Bootcamp
