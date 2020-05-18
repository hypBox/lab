import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import {
  getMilestoneIcon,
  GetMilestoneIconParams,
} from "../../utility/bootcamp.utils"
import Task from "./Task"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { FAIcon } from "../material/icons"
import { IMilestone, ITask } from "../../types"

export interface MilestoneProps {
  milestone: IMilestone
  onMilestoneClick: CallableFunction
  onTaskClick: CallableFunction
  selectedTask: ITask
  selectedMilestone: IMilestone
}

export default function Milestone(props: MilestoneProps) {
  const {
    milestone,
    onMilestoneClick,
    onTaskClick,
    selectedMilestone,
    selectedTask,
  } = props

  return (
    <>
      <ListItem button onClick={() => onMilestoneClick(milestone)}>
        <ListItemIcon>
          <FAIcon
            icon={getMilestoneIcon(milestone as GetMilestoneIconParams)}
          />
        </ListItemIcon>
        <ListItemText primary={milestone.title} />
        {selectedMilestone.id === milestone.id ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItem>
      <Collapse
        in={selectedMilestone.id === milestone.id}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding dense>
          {milestone.tasks.map((task: ITask) => (
            <Task
              key={task.id}
              task={task}
              onclick={onTaskClick}
              selectedTask={selectedTask}
            />
          ))}
        </List>
      </Collapse>
    </>
  )
}
