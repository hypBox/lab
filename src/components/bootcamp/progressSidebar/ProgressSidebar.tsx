import React from "react"
import { createStyles, makeStyles } from "../../material/styles"
import { List } from "../../material/core"
import { IMilestone, IBootcamp, ITask } from "../../../types"
import Milestone from "./Milestone"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "100%",
      backgroundColor: theme.palette.background.default,
    },
  })
)

export interface ProgressSidebarProps {
  bootcamp: IBootcamp
  onMilestoneClick: CallableFunction
  onTaskClick: CallableFunction
  selectedTask: ITask
  selectedMilestone: IMilestone
}

const ProgressSidebar: React.FunctionComponent<ProgressSidebarProps> = ({
  bootcamp,
  onMilestoneClick,
  onTaskClick,
  selectedMilestone,
  selectedTask,
}) => {
  const classes = useStyles()
  const { milestones } = bootcamp

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {milestones.map((milestone: IMilestone) => (
        <Milestone
          key={milestone.id}
          milestone={milestone}
          onMilestoneClick={onMilestoneClick}
          onTaskClick={onTaskClick}
          selectedTask={selectedTask}
          selectedMilestone={selectedMilestone}
        />
      ))}
    </List>
  )
}

export default ProgressSidebar
