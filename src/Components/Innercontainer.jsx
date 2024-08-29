import Styles from "./innercontainer.module.css";

export default function Innercontainer({children}){
    return(<div className={Styles.Innercontainer}>{children}</div>);
}