import { Action, mState, ActionType } from "../types";

export default (state: mState, action: Action) => {
  switch (action.type) {
    case ActionType.DELETE_FOOD_ITEM:
      return { ...state };
    case ActionType.ADD_FOOD_ITEM:
      return { ...state };
    case ActionType.UPDATE_FOOD_ITEM_USE_BY:
      return { ...state };
    default:
      return state;
  }
};
