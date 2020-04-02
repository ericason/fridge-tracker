import React from "react";
import { Tracker } from "../Tracker";
// import { AddItem } from "../AddItem";

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="text-center mb-4">Your Kitchen</h1>
      <Tracker />
    </React.Fragment>
  );
}
