import styled from "styled-components";

export const InputStyled = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 0.25rem;
        font-size: 1rem;
    }

    .required {
        margin-left: 0.25rem;
        color: #d97855;
    }

    input {
        height: 36px;
        padding: 0 0.75rem;

        border: none;
        border-top: 2px solid #d8b9ad;

        background-color: #f5f3f2;

        font-size: 1rem;
        outline: none;

        &::placeholder {
            color: #bdbdbd;
        }
    }

    .error {
        margin-top: 0.25rem;
        color: #d97855;
        font-size: 0.875rem;
    }
`