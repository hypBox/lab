import React, { FC } from "react"
import Logo from "./Logo"
import config from "../config"
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
} from "./material/core"
import { makeStyles, createStyles } from "./material/styles"
import { FAIcon, User, Bars, Moon, Sun } from "./material/icons"
import { connect, ConnectedProps } from "react-redux"
import { toggleDarkMode } from "../redux/preferences/preferencesActions"
import { AppState } from "../redux/configStore"

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
  title?: string
  onButtonClick?: CallableFunction
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

const Header: FC<Props> = ({
  title = config.app.title,
  onButtonClick = () => {},
  darkMode,
  toggleDarkMode,
}) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Logo className={classes.logo} />
        <Typography variant="h6" color="textPrimary" className={classes.title}>
          {title}
        </Typography>

        <div>
          <IconButton
            aria-label="current-user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="default"
          >
            <FAIcon icon={User} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            // keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem aria-label="my-lab" onClick={handleClose}>
              My Lab
            </MenuItem>
            <MenuItem aria-label="profile" onClick={handleClose}>
              Profile
            </MenuItem>
            <MenuItem aria-label="sign-out" onClick={handleClose}>
              Sign out
            </MenuItem>
          </Menu>
        </div>

        <Button
          color="default"
          // aria-label={`enable-${!darkMode ? "dark" : "light"}-theme`}
          data-testid={`enable-${!darkMode ? "dark" : "light"}-theme`}
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

export default connector(Header)
