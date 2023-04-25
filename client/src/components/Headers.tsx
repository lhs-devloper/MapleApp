import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
    display:flex;
    width:100%;
    background-color: aqua;
    justify-content: flex-end;
`
const Button = styled.button`
    color: white;
    background-color: #ccc;
`

function Headers() {
    return (
        <HeaderDiv>
            <Button>123</Button>
        </HeaderDiv>
    )
}
export default Headers;