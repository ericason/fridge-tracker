import React from "react";
import { Tracker } from "../Tracker";
import { AddItem } from "../AddItem";

export default function Home() {
  return (
    <div>
      <Tracker />
      <AddItem />
    </div>
  );
}
