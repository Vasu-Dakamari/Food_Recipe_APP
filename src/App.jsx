import { useState } from "react"
import Search from "./Components/Search"
import Foodlist from "./Components/Foodlist";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import Innercontainer from "./Components/Innercontainer";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData,setFoodData] = useState([]);
  const [foodId,setFoodId] = useState("658615")

  return (
    <div className="App">
      <Nav />
      <Search foodData = {foodData} setFoodData={setFoodData}/>
      <Container>
        <Innercontainer>
        <Foodlist setFoodId={setFoodId} foodData = {foodData} />
        </Innercontainer>
        <Innercontainer>
        <FoodDetails foodId={foodId} />
        </Innercontainer>
      </Container>
      
    </div>
  );
}

export default App
