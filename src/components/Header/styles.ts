import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem 8rem;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  ${(props) => props.theme['white']};

    @media only screen and (max-width: 600px) {
        padding: 15px 20px;
    }
`

export const Logo = styled.div`
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;

    span {
        font-size: 23px;

        strong {
            font-weight: bold;
        }
    }
`

export const Button = styled.button`
    padding: 10px 20px;
    background-color:  ${(props) => props.theme['red-800']};
    color:  ${(props) => props.theme['white']};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color:  ${(props) => props.theme['red-700']};
    }
`
