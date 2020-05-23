import { combineReducers } from "redux"
import preferencesReducer from "./preferencesReducer"

const rootReducer = combineReducers({
  preferences: preferencesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
