import React, { FunctionComponent } from "react"
import { createStyles, makeStyles } from "../material/styles"
import { ListItem, ListItemText, ListItemIcon } from "../material/core"
import { ITask } from "../../types"
import { getMenuItemIcon } from "../../utility/bootcamp.utils"

export interface TaskProps {
  task: ITask
}

const useStyles = makeStyles((theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
)

const Task: FunctionComponent<TaskProps> = ({ task }) => {
  const classes = useStyles()

  return (
    <ListItem button key={task.id} className={classes.nested}>
      <ListItemIcon>{getMenuItemIcon(task.type)}</ListItemIcon>
      <ListItemText primary={task.title} />
    </ListItem>
  )
}

export default Task
