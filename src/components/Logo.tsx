import React, { FunctionComponent } from "react"
import { Avatar } from "./material/core"
import config from "../config"

export interface LogoProps {
  className?: string | undefined
}

const getLogoPath = () => `${process.env.PUBLIC_URL}/static/images/logo.png`

const Logo: FunctionComponent<LogoProps> = (props) => {
  const {
    app: { slogan },
  } = config

  return (
    <Avatar
      alt={slogan}
      imgProps={{ title: slogan }}
      {...props}
      src={getLogoPath()}
      variant="square"
    />
  )
}

export default Logo
