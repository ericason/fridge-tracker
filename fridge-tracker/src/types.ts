export interface Action {
  type: ActionType;
  payload: FoodPurchase | { id: String; update: FoodUpdate } | String;
}

export enum ActionType {
  DELETE_FOOD_ITEM,
  ADD_FOOD_ITEM,
  UPDATE_FOOD_ITEM_USE_BY
}

export enum FoodLocation {
  FRIDGE,
  FREEZER,
  PANTRY
}

export interface mState {
  items: Array<FoodPurchase>;
}

export interface FoodPurchase {
  mId: String;
  id: String;
  name: String;
  location: FoodLocation;
  quantity: Number;
  useBy: Date;
}

export interface FoodUpdate {
  location: FoodLocation;
  quantity: Number;
  useBy: Date;
}
