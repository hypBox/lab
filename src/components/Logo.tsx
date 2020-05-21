import React, { FunctionComponent } from "react"
import { Avatar } from "./material/core"
import logo from "../static/images/logo.png"
import config from "../utility/config"

export interface LogoProps {
  className?: string | undefined
}

const Logo: FunctionComponent<LogoProps> = (props) => {
  const {
    app: { slogan },
  } = config
  return (
    <Avatar
      alt={slogan}
      imgProps={{ title: slogan }}
      {...props}
      src={logo}
      sizes={logo}
      variant="square"
    />
  )
}

export default Logo
