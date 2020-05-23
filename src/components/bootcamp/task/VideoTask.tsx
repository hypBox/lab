import React, { FunctionComponent, useState } from "react"
import { IVideoTask } from "../../../types"
import ReactPlayer from "react-player"

import { createStyles, makeStyles } from "../../material/styles"

import config from "../../../config"

const useStyels = makeStyles(() =>
  createStyles({
    playerWrapper: {
      position: "relative",
      height: "calc(100% - 68px)", // 68 is the height of the appBar
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
  onCompleted: CallableFunction
}

const VideoTask: FunctionComponent<VideoTaskProps> = ({
  task,
  onCompleted,
}) => {
  const classes = useStyels()
  const [completed, setCompleted] = useState(false)
  const progressHandler = (state: {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
  }) => {
    const {
      app: {
        video: { completedPercentage },
      },
    } = config
    if (state.played > completedPercentage && !completed) {
      setCompleted(true)
      onCompleted(task)
    }
  }

  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        className="react-player"
        url={task.url}
        controls={true}
        width="100%"
        height="100%"
        onProgress={progressHandler}
      />
    </div>
  )
}

export default VideoTask
