import React, { FunctionComponent } from "react"
import { IVideoTask } from "../../../types"
import ReactPlayer from "react-player"

import { createStyles, makeStyles } from "../../material/styles"

const APP_BAR_HEIGHT = 68

const useStyels = makeStyles(() =>
  createStyles({
    playerWrapper: {
      position: "relative",
      height: `calc(100% - ${APP_BAR_HEIGHT}px)`,
    },
    "react-player": {
      position: "absolute",
      top: 0,
      left: 0,
    },
  })
)

export interface ProgressState {
  played: number
  playedSeconds: number
  loaded: number
  loadedSeconds: number
}

export interface VideoTaskProps {
  task: IVideoTask
  onProgress: (state: ProgressState) => void
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
        onProgress={onProgress}
      />
    </div>
  )
}

export default VideoTask
