import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"

import Task from "./Task"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import StarBorder from "@material-ui/icons/StarBorder"
import { bootcampData } from "../../api"
import { IMilestone, ITask } from "../../types"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
)

export default function NestedList() {
  const classes = useStyles()
  const [selected, select] = React.useState<string>(
    bootcampData.currentTask.moduleId
  )

  const handleMilestoneClick = (milestoneId: string) => {
    select(milestoneId)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {bootcampData.milestones.map((milestone: IMilestone) => (
        <div key={milestone.id}>
          <ListItem button onClick={() => handleMilestoneClick(milestone.id)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={milestone.title} />
            {true ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={selected === milestone.id} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {milestone.tasks.map((task: ITask) => (
                <Task key={task.id} task={task} />
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  )
}
