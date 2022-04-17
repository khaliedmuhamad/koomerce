import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Rate(e) {
  const [rates] = useState(e.rates);
  const a = Math.floor(rates),
    b = rates - a;


  return (
    <div>
      { a >= 0 ?[...Array(a)].map(() => (
        <BsStarFill className="mr-1 text-1" style={{ color: "#FFC600" }} />
      )):""}
      { b >= 0 ? [...Array(b / b)].map(() => (
        <BsStarHalf className="mr-1" style={{ color: "#FFC600" }} />
      )) : ""}
      {a >= 0 ?[...Array(5 - (a +1))].map(() => (
        <BsStarFill className="mr-1" style={{ color: "#C1C8CE" }} />
      )):""}
    </div>
  );
}
