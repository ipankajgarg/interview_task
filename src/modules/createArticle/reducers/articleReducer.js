import { ARTICLE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case ARTICLE:
      return action.payload;

    default:
      return state;
  }
}
