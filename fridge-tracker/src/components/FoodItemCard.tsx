import React from "react";
import { mFood } from "../types";

export const FoodItemCard = ({ item }: { item: mFood }) => {
  return (
    <div className="food-item-card card w-100 h-100 pr-2 d-flex flex-row align-items-stretch justify-content-between">
      <div className="d-flex flex-row">
        <div className="bg-dark text-light card-side-banner">
          <small className="card-side-banner-content">
            {item.opened ? "Opened" : item.opened === false ? "Sealed" : ""}
          </small>
        </div>
        <div className="d-flex flex-column mr-2 py-2">
          <div className="h6">{item.quantity + " " + item.name}</div>
          <small className="text-muted font-italic">Use in 2 weeks</small>
        </div>
      </div>
      <div className="dropdown py-2 justify-self-end">
        <svg
          className="bi bi-three-dots-vertical"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            clipRule="evenodd"
          />
        </svg>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <h6 className="dropdown-header">Consume</h6>
          <a className="dropdown-item" href="#">
            Use
          </a>
          <a className="dropdown-item" href="#">
            Open
          </a>
          <div className="dropdown-divider"></div>
          <h6 className="dropdown-header">Edit</h6>
          <a className="dropdown-item" href="#">
            Move
          </a>
          <a className="dropdown-item" href="#">
            Add expiry
          </a>
        </div>
      </div>
    </div>
    // <div
    //   className="px-3 mt-3 grid-cell d-flex align-items-center justify-content-between"
    //   style={{ textAlign: "start" }}
    // >
    //   <div className="dropdown show grid-cell">
    //     <a
    //       className="btn btn-sm btn-light dropdown-toggle"
    //       href="#"
    //       role="button"
    //       id="dropdownMenuLink"
    //       data-toggle="dropdown"
    //       aria-haspopup="true"
    //       aria-expanded="false"
    //     ></a>

    // <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    //   <h6 className="dropdown-header">Edit</h6>
    //   <a className="dropdown-item" href="#">
    //     Move
    //   </a>
    //   <a className="dropdown-item" href="#">
    //     Add expiry
    //   </a>
    //   <div className="dropdown-divider"></div>
    //   <h6 className="dropdown-header">Consume</h6>
    //   <a className="dropdown-item" href="#">
    //     Use
    //   </a>
    //   <a className="dropdown-item" href="#">
    //     Open
    //   </a>
    // </div>
    //   </div>
    //   <div className="grid-cell flex-grow-1" style={{ textAlign: "start" }}>
    //     {item.name}
    //   </div>
    //   <div className="grid-cell">{"x" + item.quantity}</div>
    //   {/* <div className="w-75 d-flex justify-content-around overflow-auto grid-cell"></div>
    //   </div> */}
    // </div>
  );
};
