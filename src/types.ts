import { ComponentClass, FunctionComponent } from "react"

export interface Page {
  title: string
  path?: string
  exact?: boolean
  component: ComponentClass | FunctionComponent
}
export interface AppConfig {
  title: string
}

export interface Pages {
  [index: string]: Page
  ROOT: Page
  PAGE_NOT_FOUND: Page
  SIGNIN: Page
  MY_LAB: Page
  BOOTCAMP: Page
}

export interface Constants {
  pages: Pages
  app: AppConfig
}

export interface ITask {
  id: string
  title: string
  type: string
  progress: number | null
  length?: string
}

export interface IVideoTask extends ITask {
  url: string
}

export interface IMilestone {
  id: string
  title: string
  progress: number | null
  tasks: Array<ITask | IVideoTask>
}

export interface IBootcamp {
  id: string
  title: string
  progress: number | null
  currentTask: ICurrentTask
  milestones: Array<IMilestone>
}

export interface ICurrentTask {
  milestoneId: string
  taskId: string
}
