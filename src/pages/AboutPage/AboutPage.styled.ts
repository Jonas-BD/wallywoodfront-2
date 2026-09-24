import styled from "styled-components";

export const AboutPageStyled = styled.section`
    .about-content {
        display: flex;
        align-items: flex-start;
        gap: 3rem;
    }

    h2 {
        color: ${({ theme }) => theme.colors.primary};
        margin: 1.25rem 0;
    }

    .text {
        flex: 1;

        p {
            margin: 0 0 1.25rem;
            line-height: 1.35;
        }
    }

    .image {
        flex-shrink: 0;
        width: 310px;

        img {
            display: block;
            width: 100%;
            height: auto;
        }
    }
`