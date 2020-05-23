import { createStore, Store } from "redux"
import rootReducer from "./rootReducer"

export interface AppState {
  preferences: {
    darkMode: boolean
  }
}

const configStore = (): Store<AppState> => createStore(rootReducer)

export default configStore
