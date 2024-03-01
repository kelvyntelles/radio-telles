import styled from "styled-components";

export const Container = styled.div`
    background-color:  ${(props) => props.theme['white']};
    padding: 30px;
    width: 100%;
    border-radius: 10px;

    @media only screen and (max-width: 600px) {
        width: auto;
    }
`

export const AreaLogoAndNomeContato = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

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

export const AreaContato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
        padding: 20px 0;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color:  ${(props) => props.theme['green-600']};
        color:  ${(props) => props.theme['white']};
        cursor: pointer;
    }
`

export const AreaEmail = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${(props) => props.theme['gray-500']};

    span {
        font-weight: bold;
    }
`