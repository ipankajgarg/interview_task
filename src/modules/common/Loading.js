import { LOADING } from "./types";

export default function(state = false, action) {
  switch (action.type) {
    case LOADING:
      return !state;
    default:
      return state;
  }
}
