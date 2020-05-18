import React from "react"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "../../material/core"

import TaskMenuItem from "./TaskMenuItem"

import { FAIcon, ChevronUp, ChevronDown } from "../../material/icons"
import { IMilestone, ITask } from "../../../types"
import {
  getMilestoneIcon,
  GetMilestoneIconParams,
} from "../../../utility/bootcamp.utils"

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
        <FAIcon
          icon={selectedMilestone.id === milestone.id ? ChevronDown : ChevronUp}
        />
      </ListItem>
      <Collapse
        in={selectedMilestone.id === milestone.id}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding dense>
          {milestone.tasks.map((task: ITask) => (
            <TaskMenuItem
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
