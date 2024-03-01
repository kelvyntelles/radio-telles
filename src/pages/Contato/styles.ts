import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: ${(props) => props.theme['neutral-800']};
    }
`

export const AreaContato = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const AreaAnuncieComAGente = styled.div`
    display: flex;
    text-align: center;
`

