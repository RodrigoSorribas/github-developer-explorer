import React, {useState} from "react";

function SearchBar({onSubmit}){
    const [inputValue, setInputValue] = useState("")

    const handleClick = () => {
        onSubmit(inputValue);
        setInputValue("");
    }
    return(
        <>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleClick}>Search</button>
        </>
    )
}

export default SearchBar;