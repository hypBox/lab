import React, { FunctionComponent } from "react"
import { createStyles, makeStyles } from "../../material/styles"
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Typography,
} from "../../material/core"
import { FAIcon } from "../../material/icons"
import { ITask } from "../../../types"
import { getTaskIcon, GetTaskIconParams } from "./utility"

export interface TaskMenuItemProps {
  task: ITask
  onclick: CallableFunction
  selectedTask: ITask
}

const useStyles = makeStyles((theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
)

const Task: FunctionComponent<TaskMenuItemProps> = ({
  task,
  onclick,
  selectedTask,
}) => {
  const classes = useStyles()
  return (
    <ListItem
      button
      key={task.id}
      className={classes.nested}
      selected={selectedTask.id === task.id}
      onClick={() => onclick(task)}
    >
      <ListItemIcon>
        <FAIcon icon={getTaskIcon(task as GetTaskIconParams)} />
      </ListItemIcon>
      <ListItemText
        primary={task.title}
        primaryTypographyProps={{
          variant: "body2",
          color: "textPrimary",
        }}
      />
      <ListItemSecondaryAction>
        <Typography color="textPrimary" variant={"caption"}>
          {task.length}
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Task
