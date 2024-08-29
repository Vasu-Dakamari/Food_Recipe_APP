import Styles from "./fooditem.module.css";

export default function FoodItem({food, setFoodId}){
    return (<div className={Styles.fooditemContainer}>
        <img className={Styles.itemimage} src={food.image} alt="Image not Founded" />
        <div className={Styles.itemContent}>
            <p className={Styles.itemName}>{food.title}</p>
        </div>
        <div className={Styles.buttonContainer}>
        <button onClick={
            () => setFoodId(food.id)
        } className={Styles.itemButton}>View Recipe</button>
        </div>
    </div>);
}