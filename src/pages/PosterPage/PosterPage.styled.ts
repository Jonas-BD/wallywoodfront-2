import styled from "styled-components";

export const PosterPageStyled = styled.div`
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 2.5rem;
    margin: 2.5rem 0;

    aside {
        padding-right: 2rem;
        border-right: 1px solid #9b5f48;

        h2 {
            margin-top: 0;
            margin-bottom: 0.5rem;
        }

        h3 {
            margin: 0;
        }

        .favorites {
            margin-top: 2.5rem;
        }
    }

    .poster-content {
        min-width: 0;
    }
`