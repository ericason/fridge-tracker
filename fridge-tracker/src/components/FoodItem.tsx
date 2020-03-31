import React from "react";
import { FoodPurchase } from "../types";

export const FoodItem = ({ item }: { item: FoodPurchase }) => {
  return (
    <div className="d-flex mt-3 align-items-center px-4 w-25">
      <div
        className="grid-cell d-flex justify-content-between"
        style={{ minWidth: "105px", textAlign: "start" }}
      >
        <div>{item.name}</div>
        <div className="dropdown show">
          <a
            className="btn btn-sm btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">
              Move
            </a>
            <a className="dropdown-item" href="#">
              Consume
            </a>
            <a className="dropdown-item" href="#">
              Open
            </a>
          </div>
        </div>
      </div>
      <div className="grid-cell" style={{ minWidth: "50px" }}>
        {item.quantity}
      </div>
      {/* <div className="w-75 d-flex justify-content-around overflow-auto grid-cell"></div> */}
    </div>
  );
};
