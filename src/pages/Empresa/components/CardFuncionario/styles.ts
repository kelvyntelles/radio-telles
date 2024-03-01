import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme['white']};
    padding: 30px;
    border-radius: 10px;

    img {
        border-radius: 100%;
        overflow: hidden;
        height: 50px;
        width:50px;
        object-fit: cover;
    }

    span {
        font-size: 23px;
        font-weight: bold;
    }
`