import React, { useState } from "react";
import CubeCompoennts from "./CubeCompoennts";

function Main() {
    const [inputKey, setInputKey] = useState("");
    function onChangeKey(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setInputKey(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="INPUT YOUR API KEY" onChange={onChangeKey} value={inputKey}></input>
            <CubeCompoennts apiKey={inputKey} />
        </div>
    )
}

export default Main;