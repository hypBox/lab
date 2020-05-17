import React, { useState, useEffect } from "react"
import { Fab } from "../material/core"
import { Check } from "../material/icons"

interface ProgressProps {
  value: number
}

const Progress: React.FunctionComponent<ProgressProps> = (
  props: ProgressProps
) => {
  const { value } = props
  const [color, setColor] = useState<any>("primary")
  const getText = () => (value === 100 ? <Check /> : `${value}%`)

  useEffect(() => {
    if (value === 100) setColor("secondary")
  }, [value])

  return (
    <Fab size="small" color={color} aria-label="add">
      {getText()}
    </Fab>
  )
}

export default Progress
