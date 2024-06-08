import React, { useEffect, useState } from "react";
import FoodBox from "../components/FoodBox";
import "../styles/home.css";
import { Food, Foods } from "../types/app";
import axios from "axios";

function Home() {
  const [foods, setFoods] =useState([]as Food[]) 
  useEffect(() => {
    axios.get("http://localhost:3000/foods").then((res) => setFoods(res.data));
  });
  return (
    <div className="home-container">
        {foods.map((food: Food) => (
          <FoodBox key={food.id} food={food} />
        ))}

    </div>
  );
}

export default Home;
