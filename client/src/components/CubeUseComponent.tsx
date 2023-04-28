import React from "react";
import { CubeHistoryDTO } from "../types/CubeHistoryDTO";
import redCube from "../img/cube_icon01.png";
import blackCube from "../img/cube_icon02.png";
import additionalCube from "../img/cube_icon03.png";
import curiousCube from "../img/cube_icon04.png";
import meisterCube from "../img/cube_icon05.png";
import masterCube from "../img/cube_icon06.png";
import styled from "styled-components";
import { ParserCubeType } from "../types/class/ParserCubeType";

type IProps = {
    data: CubeHistoryDTO[]
}

const CubeInfoDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const CubeCountDiv = styled.div`
   width: 100px; 
   font-weight: bold;
`
function CubeUseComponent({ data }: IProps) {
    const findCubeObject = new ParserCubeType(data).getCubeData();
    return (
        <div>
            총 큐브 개수리스트
            <CubeInfoDiv>
                <img src={curiousCube} alt="redCube"></img>
                <CubeCountDiv>
                    {findCubeObject.curiousCube}개
                </CubeCountDiv>
            </CubeInfoDiv>
            <CubeInfoDiv>
                <img src={meisterCube} alt="meisterCube"></img>
                <CubeCountDiv>
                    {findCubeObject.meisterCube}개
                </CubeCountDiv>
            </CubeInfoDiv>
            <CubeInfoDiv>
                <img src={masterCube} alt="masterCube"></img>
                <CubeCountDiv>
                    {findCubeObject.masterCube}개
                </CubeCountDiv>
            </CubeInfoDiv>
            <CubeInfoDiv>
                <img src={redCube} alt="redCube"></img>
                <CubeCountDiv>
                    {findCubeObject.redCube}개
                </CubeCountDiv>
            </CubeInfoDiv>
            <CubeInfoDiv>
                <img src={blackCube} alt="blackCube"></img>
                <CubeCountDiv>
                    {findCubeObject.blackCube}개
                </CubeCountDiv>
            </CubeInfoDiv>
        </div>
    )

}

export default CubeUseComponent;