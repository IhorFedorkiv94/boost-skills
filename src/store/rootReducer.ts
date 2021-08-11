import {combineReducers} from "redux";
import {home} from "./home/reducer";

const rootReducer = combineReducers({home});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
