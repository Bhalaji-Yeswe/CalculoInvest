import styles from "./Inputs.module.css";
const Inputs = (props) =>{
    const changeHandler = (event) => {
        props.getValue(event.target.value,props.id);
    }

    return(
        <span className={styles.elements}>
            <label>{props.label}</label>
            <div>
            <input type="number" min={props.min} max ={props.max} onChange={changeHandler} value={props.value}></input>
            </div>
        </span>
    )
}

export default Inputs;