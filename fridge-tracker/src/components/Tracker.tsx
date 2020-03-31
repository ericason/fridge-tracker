import React, { useContext } from "react";
import { mState } from "../types";
import { GlobalContext } from "../context/GlobalState";
import { FoodItem } from "./FoodItem";

export const Tracker = () => {
  const { items }: mState = useContext(GlobalContext);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const today = new Date().getDay();

  const timelineDays = [];

  for (let i = 0; i < 7; i++) {
    timelineDays.push(days[(today + i) % 7]);
  }

  return (
    <div className="card mb-3 pb-3 d-flex flex-row">
      <div className="d-flex flex-column">
        <div
          className="d-flex bg-dark text-light px-4 py-2"
          style={{
            borderTopLeftRadius: ".25rem"
            // borderTopRightRadius: ".25rem"
          }}
        >
          {/* <div className="grid-cell" style={{ minWidth: "25px" }}></div> */}
          <div className="grid-cell" style={{ minWidth: "105px" }}>
            Food
          </div>
          <div className="grid-cell" style={{ minWidth: "50px" }}>
            Qty
          </div>
        </div>
        {items.map(item => (
          <FoodItem key={item.mId} item={item} />
        ))}
      </div>

      <div id="calendar" className="flex-grow-1 d-flex flex-column">
        <div
          id="calendar-header"
          className="py-2 d-flex bg-dark text-light justify-content-around align-items-center overflow-auto"
          style={{
            borderTopRightRadius: ".25rem"
          }}
        >
          {timelineDays.map(day => (
            <span>{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
