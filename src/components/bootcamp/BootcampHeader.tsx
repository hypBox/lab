import React, { FC } from "react"
import Logo from "../Logo"
import { AppBar, Button, Typography, Toolbar } from "../material/core"
import { makeStyles, createStyles } from "../material/styles"
import { FAIcon, Bars, Moon, Sun } from "../material/icons"
import { ITask } from "../../types"
import { connect, ConnectedProps } from "react-redux"
import { toggleDarkMode } from "../../redux/preferences/preferencesActions"
import { AppState } from "../../redux/configStore"

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
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

const mapState = (state: AppState) => {
  const {
    preferences: { darkMode },
  } = state
  return {
    darkMode,
  }
}
const mapDispatch = (dispatch: any) => {
  return {
    toggleDarkMode: () => dispatch(toggleDarkMode()),
  }
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = BootcampHeaderProps & PropsFromRedux

const BootcampHeader: FC<Props> = ({
  task,
  onButtonClick,
  darkMode,
  toggleDarkMode,
}) => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Logo className={classes.logo} />
        <Typography variant="h6" color="textPrimary" className={classes.title}>
          {task.title}
        </Typography>
        <Button
          color="default"
          onClick={() => {
            toggleDarkMode()
          }}
        >
          <FAIcon size={"lg"} icon={darkMode ? Sun : Moon} />
        </Button>
        <Button
          role="toggle-progress-sidebar"
          color="default"
          onClick={() => onButtonClick()}
        >
          <FAIcon size={"lg"} icon={Bars} />
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default connector(BootcampHeader)
