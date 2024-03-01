import styled from "styled-components";

export const AreaQuemSomos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    img {
        width: 100%;
        border-radius: 5px;
        max-height: 450px;
        object-fit: cover;
    }
    
    p {
        color: ${(props) => props.theme['neutral-800']};
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

export const AreaNossosValores = styled.div`
    margin-top: 50px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NossosValores = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

export const AreaNossoTime = styled.div`
    margin-top: 50px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NossoTime = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

