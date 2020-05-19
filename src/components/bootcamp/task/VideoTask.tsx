import React, { FunctionComponent } from "react"
import { IVideoTask } from "../../../types"
import ReactPlayer from "react-player"

import { createStyles, makeStyles } from "../../material/styles"

const useStyels = makeStyles(() =>
  createStyles({
    playerWrapper: {
      position: "relative",
      height: "100%",
    },
    "react-player": {
      position: "absolute",
      top: 0,
      left: 0,
    },
  })
)

export interface VideoTaskProps {
  task: IVideoTask
  onProgress?: CallableFunction
}

const VideoTask: FunctionComponent<VideoTaskProps> = ({ task, onProgress }) => {
  const classes = useStyels()

  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        className="react-player"
        url={task.url}
        controls={true}
        width="100%"
        height="100%"
        onProgress={({ played }) => {
          onProgress && onProgress(played)
        }}
      />
    </div>
  )
}

export default VideoTask
