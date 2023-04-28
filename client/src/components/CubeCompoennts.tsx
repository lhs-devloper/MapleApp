import React, { useEffect, useState } from "react";
import { CubeHistoryDTO } from "../types/CubeHistoryDTO";
import CubeDataComponent from "./CubeDataComponent";
import CubeUseComponent from "./CubeUseComponent";

type propsDTO = {
    apiKey: string
    dateString: string
}

function CubeCompoennts(props: propsDTO) {
    const [key, setKey] = useState("");
    const [cubeData, setCubeData] = useState<CubeHistoryDTO[]>([]);
    const [statusCode, setStatusCode] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setKey(props.apiKey)
        }, 500)
        return () => clearTimeout(timer);
    }, [props])

    useEffect(() => {
        fetch(`http://localhost:4000?key=${key}&date=${props.dateString}`, {
            'method': 'GET',
        })
            .then(async (response) => {
                if (response.status === 200) {
                    const data = await response.json();
                    setCubeData(data)
                    setStatusCode(200)
                } else if (response.status === 406) {
                    setCubeData([])
                    setStatusCode(406)
                } else {
                    setCubeData([])
                    setStatusCode(400)
                }
            })
    }, [key, props.dateString])
    function onClick() {
        const cubeList = document.getElementById("cubeList");
        if (cubeList?.classList.contains("hide")) {
            cubeList?.classList.add("show")
            cubeList?.classList.remove("hide")
        } else {
            cubeList?.classList.add("hide")
            cubeList?.classList.remove("show")
        }
    }
    if (statusCode === 200) {
        const cubeReulsrList = cubeData.map((cube: CubeHistoryDTO, key: number) => {
            return (
                <CubeDataComponent key={key} data={cube} />
            )
        })
        // ? 개선필요
        return (
            <div>
                <CubeUseComponent data={cubeData} />
                <button onClick={onClick}>
                    큐브 사용 확인
                </button>
                <div className="hide" id="cubeList">
                    {cubeReulsrList}
                </div>
            </div>
        )
    } else if (statusCode === 406) {
        return (
            <div>
                해당 날짜에 데이터가 존재하지 않습니다.
            </div>
        )
    } else {
        if (props.dateString === "") {
            return (
                <div>
                    날짜를 선택해주세요.
                </div>
            )
        }
        return (
            <div>
                해당 API Key는 존재하지 않습니다.
            </div>
        )
    }
}


export default CubeCompoennts;