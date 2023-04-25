import React, { useState } from "react";
import Value from "./Value";

function Main() {
    const [inputKey, setInputKey] = useState("");
    function onChangeKey(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setInputKey(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="INPUT YOUR API KEY" onChange={onChangeKey} value={inputKey}></input>
            <Value name={inputKey} />
        </div>
    )
}

export default Main;