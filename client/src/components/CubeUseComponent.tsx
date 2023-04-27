import React from "react";
import { CubeHistoryDTO } from "../types/CubeHistoryDTO";
import redCube from "../img/cube_icon01.png";
import blackCube from "../img/cube_icon02.png";
import additionalCube from "../img/cube_icon03.png";
import curiousCube from "../img/cube_icon04.png";
import meisterCube from "../img/cube_icon05.png";
import masterCube from "../img/cube_icon06.png";
import styled from "styled-components";

type IProps = {
    data: CubeHistoryDTO
}

const CubeDiv = styled.div`
    display: flex;
    justify-content: center;
    
`

const CubeInfo = styled.div<{ success: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: ${({ success }) => success ? '#fff' : '#ccc'};
`
function CubeUseComponent({ data }: IProps) {
    function returnCubeImg(cube_type: string): string {
        let imgSrc: string = "";
        switch (cube_type) {
            case "레드 큐브":
                imgSrc = redCube;
                break;
            case "블랙 큐브":
                imgSrc = blackCube;
                break;
            case "에디셔널 큐브":
                imgSrc = additionalCube;
                break;
            case "수상한 큐브":
                imgSrc = curiousCube;
                break;
            case "장인의 큐브":
                imgSrc = meisterCube
                break;
            case "명장의 큐브":
                imgSrc = masterCube
                break;
        }
        return imgSrc
    }
    const ceiling = data.upgradeguarantee ? '❗천장등업' : '';
    return (
        <CubeDiv>
            <img src={returnCubeImg(data.cube_type)} alt="redCube" style={{ width: '10%' }} />
            <CubeInfo success={data.item_upgrade_result === "성공" ? true : false}>
                <div>
                    {data.character_name}
                </div>
                <div>
                    템 부위: {data.item_equip_part}
                </div>
                <div>
                    템 레벨: {data.item_level}
                </div>
                <div>
                    {data.target_item}
                </div>
                <div>
                    {ceiling}
                </div>
            </CubeInfo>
        </CubeDiv>
    )

}

export default CubeUseComponent;