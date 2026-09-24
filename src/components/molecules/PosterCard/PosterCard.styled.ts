import styled from "styled-components";

export const PosterCardStyled = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
    }

    .actions {
        display: flex;
        gap: 0.75rem;
        margin-top: auto;

        button {
            padding: 0.5rem 1rem;
            border: 1px solid ${({ theme }) => theme.colors.textcolor};
            border-radius: 4px;
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.buttoncolor};
            color: ${({ theme }) => theme.colors.textcolor};
            font-size: ${({ theme }) => theme.fontsizes.s};
            font-weight: 900;
        }
    }
`