import Styles from "./item.module.css";

export default function Item({ item }) {

  return (
    <div>
      <div className={Styles.itemContainer}>
        <div className={Styles.imageConatiner}> 
          <img className={Styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100X100/` + item.image
            }
            atl=""
          />
        </div>

        <div  className={Styles.nameConatiner}>

        <div className={Styles.name}>{item.Name}</div>
        <div className={Styles.amount}>
          {item.amount} {item.unit}
        </div>
        </div>
      </div>
    </div>
  );
}
