import React, { createContext, useReducer } from "react";
import { mState, FoodLocation } from "../types";
import AppReducer from "./AppReducer";

// Initial state
const initialState: mState = {
  items: [
    {
      mId: "1",
      id: "1009",
      name: "tofu",
      location: FoodLocation.FRIDGE,
      quantity: 2,
      useBy: new Date(2020, 3, 3)
    },
    {
      mId: "2",
      id: "424",
      name: "potato",
      location: FoodLocation.PANTRY,
      quantity: 5,
      useBy: new Date(2020, 5, 3)
    }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ items: state.items }}>
      {children}
    </GlobalContext.Provider>
  );
};
