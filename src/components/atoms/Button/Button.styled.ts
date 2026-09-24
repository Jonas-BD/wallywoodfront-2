import styled from "styled-components";

export const ButtonStyled = styled.button`
    min-width: 140px;
    height: 40px;
    padding: 0 1.5rem;

    border: 1px solid #5a453d;
    border-radius: 4px;

    background-color: #d8b9ad;

    font-size: 1rem;

    cursor: pointer;

    &:hover {
        opacity: 0.85;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`