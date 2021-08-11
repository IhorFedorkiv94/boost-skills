import {RootState} from "../rootReducer";
import {useSelector} from "react-redux";
import {HomeState} from "./reducer";

export const useHome = (): HomeState => useSelector((state: RootState) => state.home);
