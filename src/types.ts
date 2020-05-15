import { ComponentClass, FunctionComponent } from "react"

export interface Page {
  title: string
  path?: string
  exact?: boolean
  component: ComponentClass | FunctionComponent
}

export interface Pages {
  [index: string]: Page
  ROOT: Page
  PAGE_NOT_FOUND: Page
  SIGNIN: Page
  MY_LAB: Page
}

export interface Constants {
  pages: Pages
}
