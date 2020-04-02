import React, { createContext, useReducer } from "react";
import { mState, FoodLocation } from "../types";
import AppReducer from "./AppReducer";

// Initial state
const initialState: mState = {
  items: [
    {
      mId: "1",
      id: "1009",
      name: "Tofu",
      location: FoodLocation.FRIDGE,
      quantity: 2,
      useBy: new Date(2020, 3, 3),
      opened: true
    },
    {
      mId: "2",
      id: "424",
      name: "Potato",
      location: FoodLocation.PANTRY,
      quantity: 1,
      useBy: new Date(2020, 3, 14),
      opened: null
    },
    {
      mId: "3",
      id: "425",
      name: "Oranges",
      location: FoodLocation.PANTRY,
      quantity: 5,
      useBy: new Date(2020, 3, 10),
      opened: null
    },
    {
      mId: "4",
      id: "1010",
      name: "Capsicum",
      location: FoodLocation.FRIDGE,
      quantity: 2,
      useBy: new Date(2020, 3, 6),
      opened: null
    },
    {
      mId: "5",
      id: "1040",
      name: "Cucumber",
      location: FoodLocation.FRIDGE,
      quantity: 2,
      useBy: new Date(2020, 3, 5),
      opened: null
    },
    {
      mId: "6",
      id: "2101",
      name: "Feta",
      location: FoodLocation.FRIDGE,
      quantity: 2,
      useBy: new Date(2020, 3, 4),
      opened: false
    },
    {
      mId: "7",
      id: "2103",
      name: "Banana",
      location: FoodLocation.FRIDGE,
      quantity: 4,
      useBy: new Date(2020, 3, 3),
      opened: false
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
