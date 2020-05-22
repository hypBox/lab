import React, { FunctionComponent } from "react"
import Logo from "../Logo"
import { AppBar, Button, Typography, Toolbar } from "../material/core"
import { makeStyles, createStyles } from "../material/styles"
import { FAIcon, Bars, Moon } from "../material/icons"
import { ITask } from "../../types"
import { connect } from "react-redux"
import { updateTheme } from "../../redux/actions/themeActions"

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
  theme: boolean
  toggleTheme: CallableFunction
}

const BootcampHeader: FunctionComponent<BootcampHeaderProps> = ({
  task,
  onButtonClick,
  theme,
  toggleTheme,
}) => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Logo className={classes.logo} />
        <Typography variant="h6" className={classes.title}>
          {task.title} dark:{theme.toString()}
        </Typography>
        <Button color="inherit">
          <FAIcon size={"lg"} icon={Moon} />
        </Button>
        <Button
          role="toggle-progress-sidebar"
          color="inherit"
          // onClick={() => onButtonClick()}
          onClick={() => {
            toggleTheme(false)
          }}
        >
          <FAIcon size={"lg"} icon={Bars} />
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state: any) => {
  console.log("state", state)
  return {
    theme: state.theme,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleTheme: (dark: any) => dispatch(updateTheme(dark)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BootcampHeader)
