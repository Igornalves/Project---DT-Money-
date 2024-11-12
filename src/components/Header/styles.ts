import styled from "styled-components";

export const HeaderConteiner = styled.header`
    background-color: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
`

export const DivTitule = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.text`
    margin-left: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 25px;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px; 
    cursor: pointer;
    
    & :hover {
        background: ${props => props.theme['green-700']};
        transition: background-color 0.2s;
    }
`
