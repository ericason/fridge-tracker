import React from "react";
import { mFood } from "../types";
import { FoodItemCard } from "./FoodItemCard";

export const FoodItem = ({ item }: { item: mFood }) => {
  function getDaysUntilUseBy(item: mFood): number {
    const diff = item.useBy.valueOf() - new Date().valueOf();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  return (
    <div className="food-item-row w-100 d-flex flex-row" key={item.mId}>
      <div className="food-item-card-wrapper">
        <FoodItemCard item={item} />
      </div>
      <div className="vertical-divider ml-3"></div>
      <div className="timeline-bar-container flex-grow-1 d-flex align-items-center">
        <div
          className="timeline-bar"
          style={{
            width: getDaysUntilUseBy(item) * (100 / 14) - 100 / 28 + "%",
            height: "33%",
            backgroundColor: "green"
          }}
        ></div>
      </div>
    </div>
  );
};
