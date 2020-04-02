import React, { useContext, useState } from "react";
import { mState, FoodLocation } from "../types";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";
import { FoodItemList } from "./FoodItemList";

export const Tracker = () => {
  const { items }: mState = useContext(GlobalContext);
  const [currentTab, setCurrentTab] = useState(FoodLocation.PANTRY);

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const today = new Date().getDay();

  const timelineDays = [];

  for (let i = 0; i < 14; i++) {
    timelineDays.push(days[(today + i) % 7]);
  }

  return (
    <div>
      <ul
        className="nav nav-tabs nav-fill"
        style={{ borderBottom: "none" }}
        id="myTab"
        role="tablist"
      >
        <li className="nav-item active">
          <a
            className="nav-link active"
            id="pantry-tab"
            data-toggle="tab"
            href="#pantry"
            role="tab"
            aria-controls="pantry"
            aria-selected="true"
            onClick={e => setCurrentTab(FoodLocation.PANTRY)}
          >
            Pantry
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="fridge-tab"
            data-toggle="tab"
            href="#fridge"
            role="tab"
            aria-controls="fridge"
            aria-selected="false"
            onClick={e => setCurrentTab(FoodLocation.FRIDGE)}
          >
            Fridge
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="freezer-tab"
            data-toggle="tab"
            href="#freezer"
            role="tab"
            aria-controls="freezer"
            aria-selected="false"
            onClick={e => setCurrentTab(FoodLocation.FREEZER)}
          >
            Freezer
          </a>
        </li>
      </ul>
      <div id="kitchen-card" className="card mb-3 p-3 d-flex flex-column">
        <div className="kitchen-card-header d-flex flex-row mb-2">
          <div className="search-container">
            <form className="search-form w-100 form-inline d-flex justify-content-stretch md-form form-sm mt-0">
              <i
                className="search-icon fas fa-search d-flex align-items-center justify-content-center"
                aria-hidden="true"
              ></i>
              <input
                className="search-input flex-grow-1 form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
          </div>
          <div
            className="calendar-header ml-3"
            style={{
              borderTopRightRadius: ".25rem",
              minWidth: "300px"
            }}
          >
            {timelineDays.map((day, i) => (
              <span
                key={i}
                style={{
                  fontSize: "12px",
                  minWidth: "25px",
                  textAlign: "center"
                }}
              >
                {day}
              </span>
            ))}
          </div>
        </div>
        <div className="tab-content pt-2 pb-1">
          <div
            className="show active tab-pane fade"
            id="pantry"
            role="tabpanel"
            aria-labelledby="pantry-tab"
          >
            {items.filter(item => item.location === FoodLocation.PANTRY)
              .length === 0 ? (
              <div className="text-center">No Items Here!</div>
            ) : (
              <FoodItemList
                items={items.filter(
                  item => item.location === FoodLocation.PANTRY
                )}
              />
            )}
          </div>

          <div
            id="fridge"
            role="tabpanel"
            aria-labelledby="fridge-tab"
            className="tab-pane fade"
          >
            {items.filter(item => item.location === FoodLocation.FRIDGE)
              .length === 0 ? (
              <div className="text-center">No Items Here!</div>
            ) : (
              <FoodItemList
                items={items.filter(
                  item => item.location === FoodLocation.FRIDGE
                )}
              />
            )}
          </div>
          <div
            id="freezer"
            role="tabpanel"
            aria-labelledby="freeze-tab"
            className="tab-pane fade"
          >
            {items.filter(item => item.location === FoodLocation.FREEZER)
              .length === 0 ? (
              <div className="text-center">No Items Here!</div>
            ) : (
              <FoodItemList
                items={items.filter(
                  item => item.location === FoodLocation.FREEZER
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
