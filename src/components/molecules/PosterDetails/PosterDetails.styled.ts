import styled from "styled-components";

export const PosterDetailsStyled = styled.article`
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 4rem;
    align-items: start;

    .poster-info {
        h2 {
            margin: 0 0 2.5rem;
            font-size: 2rem;
        }
    }

    .description {
        max-width: 750px;
        font-size: 1.1rem;
        line-height: 1.5;

        p {
            margin: 0;
        }
    }

    .poster-meta {
        margin-top: 2rem;

        p {
            margin: 0 0 1.75rem;
            font-size: 1.1rem;
        }
    }

    .price {
        margin: 2rem 0;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
            height: 3rem;
            background-color: #d8b9ad;
            border: 1px solid #5a453d;
            border-radius: 4px;
            cursor: pointer;
        }

        .cart-button {
            min-width: 195px;
            padding: 0 2rem;
            font-size: 1rem;
        }

        .favorite-button {
            width: 56px;
            display: grid;
            place-items: center;
            padding: 0;

            svg {
                width: 1.6rem;
                height: 1.6rem;
            }
        }
    }

    figure {
        margin: 0;
        justify-self: end;
        width: 100%;
        max-width: 500px;

        img {
            display: block;
            width: 100%;
            height: auto;
        }
    }
`