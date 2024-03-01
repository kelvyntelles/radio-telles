import styled from "styled-components";

export const Container = styled.footer`
    margin-top: 60px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  ${(props) => props.theme['white']};

    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme['gray-500']};
`
