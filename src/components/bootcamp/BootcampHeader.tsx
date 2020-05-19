import React, { FunctionComponent } from "react"
import { AppBar, Button, Typography, Toolbar } from "../material/core"
import { makeStyles, createStyles } from "../material/styles"
import { FAIcon, Bars, Moon } from "../material/icons"
import { ITask } from "../../types"

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
)

export interface BootcampHeaderProps {
  task: ITask
  onButtonClick: CallableFunction
}

const BootcampHeader: FunctionComponent<BootcampHeaderProps> = ({
  task,
  onButtonClick,
}) => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {task.title}
        </Typography>
        <Button color="inherit">
          <FAIcon size={"lg"} icon={Moon} />
        </Button>
        <Button color="inherit" onClick={() => onButtonClick()}>
          <FAIcon size={"lg"} icon={Bars} />
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default BootcampHeader
