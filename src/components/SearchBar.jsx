import React, {useState} from "react";
import styles from "../styles/SearchBar.module.css";

function SearchBar({onSubmit}){
    const [inputValue, setInputValue] = useState("")

    const handleClick = () => {
        onSubmit(inputValue);
        setInputValue("");
    }
    return(
        <>
            <input className={styles.button} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className={styles.input} onClick={handleClick}>Search</button>
        </>
    )
}

export default SearchBar;