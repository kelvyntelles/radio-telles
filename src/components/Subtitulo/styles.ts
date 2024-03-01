import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    color: ${(props) => props.theme['gray-500']};

    span {
        font-weight: bold;
    }
`