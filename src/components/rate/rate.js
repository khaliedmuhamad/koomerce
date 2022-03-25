import React, { useState } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function Rate(e) {
  const [rates, setfirst] = useState(e.rates);
  const a = Math.floor(rates),
    b = rates - Math.floor(rates);

  return (
    <div>
      {[...Array(a)].map((star) => (
        <BsStarFill style={{ color: "#FFC600" }} />
      ))}
      {[...Array(b/b)].map((star) => (
        <BsStarHalf style={{ color: "#FFC600" }} />
      ))}
      {[...Array(5- (a+1))].map((star) => (
        <BsStar style={{ color: "#fff" }} />
      ))}
    </div>
  );
}
