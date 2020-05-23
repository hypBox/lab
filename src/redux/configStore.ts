import { createStore, Store } from "redux"
import rootReducer from "./reducers"

export interface AppState {
  preferences: {
    darkMode: boolean
  }
}

const configStore = (): Store<AppState> => createStore(rootReducer)

export default configStore
