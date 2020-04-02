import React from "react";
import { mFood } from "../types";
import { FoodItem } from "./FoodItem";
import "../App.css";

export const FoodItemList = ({ items }: { items: Array<mFood> }) => {
  return (
    <div className="d-flex flex-column">
      {items.map(item => (
        <FoodItem key={item.mId} item={item} />
      ))}
    </div>
  );
};
