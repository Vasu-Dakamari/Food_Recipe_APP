import { useState } from "react";
import { useEffect } from "react";
import Styles from "./fooddetaiks.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "40c756ab66a345b4858dbc4a2b4e72e3";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(False);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={Styles.recipeCard}>
        <h2 className={Styles.recipeName}>{food.title}</h2>
        <img className={Styles.recipeImage} src={food.image} />
        <div className={Styles.recipeDetails}>
          <span>
            <strong> ⏰ {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "🍃 vegetarian" : "🥩 non-vegetarian"}{" "}</strong>
          </span>
          <span>
          🧑‍🍳 <strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🥛 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
        💲{" "}<span><strong>{food.pricePerServing / 100} Per Serving</strong></span>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isloading={isloading}/>
      <h2>Instructions</h2>
      <div className={Styles.recipeInstructions}>
        <ol>
        {isloading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}</ol>
        </div>
      </div>
    </div>
  );
}
