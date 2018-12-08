import { COMPANIES, DELETE_COMPANY, ADD_COMPANY } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case COMPANIES:
      state = action.payload.articleList;
      return action.payload.company_list;
    case DELETE_COMPANY:
      const arr = state.filter(obj => obj.id !== action.payload);
      return [...arr];
    case ADD_COMPANY:
      console.log(state);
      const newArr = state.push(action.payload.company_details);
      console.log(newArr);
      console.log(action);
      return [...state, state.push(action.payload.company_details)];
    default:
      return state;
  }
}
