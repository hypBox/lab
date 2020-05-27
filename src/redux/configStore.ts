import { createStore, Store, applyMiddleware } from "redux"
import rootReducer from "./rootReducer"

import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"

export interface AppState {
  preferences: {
    darkMode: boolean
  }
}

const middlewares: Array<any> = [reduxImmutableStateInvariant()]

if (process.env.NODE_ENV === "development") {
  middlewares.push(
    createLogger({
      collapsed: true,
    })
  )
}

const configStore = (): Store<AppState> =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default configStore
