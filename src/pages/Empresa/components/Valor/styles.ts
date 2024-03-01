import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme['white']};
    padding: 30px;
    border-radius: 10px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        overflow: hidden;
        height: 50px;
        width:50px;
        background-color: ${(props) => props.theme['zinc-200']};
        color: ${(props) => props.theme['gray-500']};
        font-weight: bold;
    }

    span {
        font-size: 23px;
        font-weight: bold;
    }
`