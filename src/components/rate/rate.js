import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Rate(e) {
  const [rates, setfirst] = useState(e.rates);
  const a = Math.floor(rates),
    b = rates - Math.floor(rates);

  return (
    <div>
      {[...Array(a)].map((star) => (
        <BsStarFill className="mr-1 text-1" style={{ color: "#FFC600" }} />
      ))}
      {[...Array(b/b)].map((star) => (
        <BsStarHalf  className="mr-1" style={{ color: "#FFC600" }} />
      ))}
      {[...Array(5- (a+1))].map((star) => (
        <BsStarFill className="mr-1" style={{ color: "#C1C8CE" }} />
      ))}
    </div>
  );
}
