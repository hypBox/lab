import React, { FunctionComponent } from "react"
import { IVideoTask } from "../../../types"

export interface VideoTaskProps {
  task: IVideoTask
}

const VideoTask: FunctionComponent<VideoTaskProps> = ({ task }) => {
  return <h2>I am a video task titled {task.title}</h2>
}

export default VideoTask
