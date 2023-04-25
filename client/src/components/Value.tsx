import React, { useEffect, useState } from "react";

type dto = {
    name: string
}
function Value(props: dto) {
    const [key, setKey] = useState("");
    console.log("props:" + props.name)
    useEffect(() => {
        const timer = setTimeout(() => {
            setKey(props.name)
        }, 500)
        return () => clearTimeout(timer);
    }, [props])

    return (
        <div>
            {key}
        </div>
    )
}

export default Value;