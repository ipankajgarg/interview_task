import { combineReducers } from "redux";
import companies from "../home/reducers/homeReducer";
import article from "../createArticle/reducers/articleReducer";
import Loading from "./Loading";

const rootReducer = combineReducers({
  companies,
  article,
  Loading
});

export default rootReducer;
