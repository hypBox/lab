import React, { FunctionComponent } from "react"
import { ITask } from "../../../types"

import VideoTask from "./VideoTask"

export interface TaskProps {
  task: ITask
}

const getTaskComponent = (task: ITask) => {
  const { type } = task
  const types: any = {
    video: VideoTask,
  }
  console.log(type)
  return types[type] || <h1>Invalid</h1>
}

const Task: FunctionComponent<TaskProps> = ({ task }) => {
  const TaskComponent = getTaskComponent(task)
  return <TaskComponent task={task} />
}

export default Task
