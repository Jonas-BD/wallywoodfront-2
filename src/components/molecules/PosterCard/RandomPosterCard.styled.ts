import styled from "styled-components";

export const RandomPosterCardStyled = styled.article`
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 1.25rem;

    figure {
        margin: 0;

        img {
            width: 100%;
            height: 225px;
            object-fit: cover;
            display: block;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h3 {
        margin: 0 0 0.75rem;
    }

    p {
        margin: 0 0 1rem;
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
`;