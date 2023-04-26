import React from "react";
import { CubeHistoryDTO } from "../types/CubeHistoryDTO";

type IProps = {
    data: CubeHistoryDTO
}

function CubeUseComponent({ data }: IProps) {
    return (
        <div>
            {data.id}<br></br>
            {data.character_name}<br></br>
            {data.cube_type}<br></br>
        </div>
    )

}

export default CubeUseComponent;