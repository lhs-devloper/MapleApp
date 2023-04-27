import React, { useEffect, useState } from "react";
import CubeUseComponent from "./CubeUseComponent";
import { CubeHistoryDTO } from "../types/CubeHistoryDTO";

type propsDTO = {
    apiKey: string
}

function CubeCompoennts(props: propsDTO) {
    const [key, setKey] = useState("");
    const [cubeData, setCubeData] = useState<CubeHistoryDTO[]>([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setKey(props.apiKey)
        }, 500)
        return () => clearTimeout(timer);
    }, [props])

    useEffect(() => {
        fetch(`http://localhost:4000?key=${key}`, {
            'method': 'GET',
        })
            .then(async (response) => {
                if (response.status === 200) {
                    const data = await response.json();
                    setCubeData(data)
                    console.log(data)
                } else {
                    setCubeData([])
                }
            })
    }, [key])
    if (cubeData.length !== 0) {
        const dataList = cubeData.map((cube: CubeHistoryDTO, key: number) => {
            return (
                <CubeUseComponent key={key} data={cube} />
            )
        })
        // const dataList: JSX.Element[] = cubeData?.map((data: CubeHistoryDTO, key:number)=>{
        //     <CubeUseComponent key={key} data={data} />
        // })
        return (
            <div>
                {dataList}
            </div>
        )
    } else {
        return (
            <div>
                해당 API Key는 존재하지 않습니다.
            </div>
        )
    }
}


export default CubeCompoennts;