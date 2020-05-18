import {
  PlayCircle,
  ChevronRight,
  Quizz,
  Code,
  Milestone,
  Rocket,
  Check,
} from "../components/material/icons"

export interface GetMilestoneIconParams {
  progress: number
}

export interface GetTaskIconParams {
  type: string
  progress: number
}

export const getTaskIcon = (params: GetTaskIconParams): any => {
  if (params.progress === 100) return Check
  const iconCollections: any = {
    video: PlayCircle,
    quizz: Quizz,
    challenge: Code,
    moreexamples: Rocket,
  }
  return iconCollections[params.type] || ChevronRight
}

export const getMilestoneIcon = (params: GetMilestoneIconParams): any =>
  params.progress === 100 ? Check : Milestone
