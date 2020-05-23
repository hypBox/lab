import { combineReducers } from "redux"
import preferencesReducer from "./preferences/preferencesReducer"

const rootReducer = combineReducers({
  preferences: preferencesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
