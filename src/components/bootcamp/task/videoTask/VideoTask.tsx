import React, { FunctionComponent } from "react"
import { IVideoTask } from "../../../../types"
import ReactPlayer from "react-player"

export interface VideoTaskProps {
  task: IVideoTask
}

const VideoTask: FunctionComponent<VideoTaskProps> = ({ task }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={task.url}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default VideoTask
