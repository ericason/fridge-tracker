export interface Action {
  type: ActionType;
  payload: mFood | { id: String; update: FoodUpdate } | string;
}

export enum ActionType {
  DELETE_FOOD_ITEM,
  ADD_FOOD_ITEM,
  UPDATE_FOOD_ITEM_USE_BY
}

export enum FoodLocation {
  PANTRY,
  FRIDGE,
  FREEZER
}

export interface mState {
  items: Array<mFood>;
}

export interface mFood {
  mId: string;
  id: string;
  name: string;
  location: FoodLocation;
  quantity: number;
  useBy: Date;
  opened: boolean | null;
}

export interface FoodUpdate {
  location: FoodLocation;
  quantity: number;
  useBy: Date;
}
