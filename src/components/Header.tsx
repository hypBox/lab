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
import { useSelector, useDispatch } from "react-redux"
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

const Header: FC<BootcampHeaderProps> = ({
  title = config.app.title,
  onButtonClick = () => {},
}) => {
  const classes = useStyles()
  const dispatchToggleDarkMode = useDispatch()
  const darkMode = useSelector<AppState>(
    ({ preferences: { darkMode } }) => darkMode
  )

  const toggleDarkModeHandler = () => {
    dispatchToggleDarkMode(toggleDarkMode())
  }

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
          data-testid={`enable-${!darkMode ? "dark" : "light"}-theme`}
          onClick={toggleDarkModeHandler}
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

export default Header
