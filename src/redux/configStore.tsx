import { createStore } from "redux"
import rootReducer from "./reducers"

export interface Store {
  darkTheme: boolean
}

const configStore = (intialState: any) => createStore(rootReducer, intialState)

export default configStore
