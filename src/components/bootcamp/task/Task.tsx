import React, { FunctionComponent } from "react"
import { ITask, IVideoTask } from "../../../types"

import VideoTask, { ProgressState } from "./VideoTask"

export interface TaskProps {
  task: ITask | IVideoTask
}

const videoTaskOnProgressHandler = (state: ProgressState): void => {
  console.log("completed", state)
}

const getTaskComponent = (task: ITask | IVideoTask) => {
  const { type } = task
  const types: any = {
    video: (
      <VideoTask
        onProgress={videoTaskOnProgressHandler}
        task={task as IVideoTask}
      />
    ),
  }
  return types[type] || <h1>Invalid</h1>
}

const Task: FunctionComponent<TaskProps> = ({ task }) => {
  return getTaskComponent(task)
}

export default Task
