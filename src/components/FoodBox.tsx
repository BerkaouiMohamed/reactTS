import React from "react";
import "../styles/foodbox.css";
import { Food } from "../types/app";

type FoodBoxProps ={
   food:Food
}
function FoodBox({food}: FoodBoxProps) {
  return (
    <div className="food-box-container">
      <img src={food.image} alt="" />
      <div>
        <h3>{food.name}</h3>
        <p>{food.price}</p>
        <button>see more</button>
      </div>
      <div>
        <button>+</button>
        <p>count</p>
        <button>-</button>
      </div>
    </div>
  );
}

export default FoodBox;
