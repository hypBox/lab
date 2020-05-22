import React, { FunctionComponent } from "react"
import Logo from "../Logo"
import { AppBar, Button, Typography, Toolbar } from "../material/core"
import { makeStyles, createStyles } from "../material/styles"
import { FAIcon, Bars, Moon } from "../material/icons"
import { ITask } from "../../types"

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#212121",
    },
    logo: {
      marginRight: "10px",
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
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Logo className={classes.logo} />
        <Typography variant="h6" className={classes.title}>
          {task.title}
        </Typography>
        <Button color="inherit">
          <FAIcon size={"lg"} icon={Moon} />
        </Button>
        <Button
          role="toggle-progress-sidebar"
          color="inherit"
          onClick={() => onButtonClick()}
        >
          <FAIcon size={"lg"} icon={Bars} />
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default BootcampHeader
