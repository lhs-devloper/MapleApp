import React, { useState } from "react";
import CubeCompoennts from "./CubeCompoennts";

function Main() {
    const [inputKey, setInputKey] = useState("");
    const [date, setDate] = useState("");
    function onChangeKey(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setInputKey(e.target.value)
    }

    function onChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setDate(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="INPUT YOUR API KEY" onChange={onChangeKey} value={inputKey}></input>
            <input type="date" onChange={onChangeDate}></input>
            <CubeCompoennts apiKey={inputKey} dateString={date} />
        </div>
    )
}

export default Main;