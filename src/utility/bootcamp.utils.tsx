import React from "react"

import { PlayCircleOutline, ChevronRight } from "../components/material/icons"

export const getMenuItemIcon = (type: string): any => {
  const iconCollections: any = {
    video: <PlayCircleOutline />,
  }
  return iconCollections[type] || <ChevronRight />
}
