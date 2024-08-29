import { useEffect, useState } from "react";
import Styles from "./search.module.css";

const URL ="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "40c756ab66a345b4858dbc4a2b4e72e3";

export default function Search({foodData, setFoodData}){
    const [quary,setQuary] = useState("pizza");
    useEffect(() => {
        async function fetchFood(){
            // const res =  await fetch("https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=40c756ab66a345b4858dbc4a2b4e72e3" '');
            const res =  await fetch(`${URL}?query=${quary}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results)
        }
        fetchFood();
    },[quary]);
    return(<div className={Styles.SearchContainer}>
        <input className={Styles.inputbox} value={quary} onChange={(e)=>setQuary(e.target.value)} type="text"/>
    </div>);

}