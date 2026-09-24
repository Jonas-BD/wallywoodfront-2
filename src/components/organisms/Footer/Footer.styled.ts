import styled from "styled-components";

export const FooterStyled = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.colors.background};
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem 0;
    margin-top: 15rem;

    h3 {
        color: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.fonts[0]};
    }

    section {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }

    section:nth-child(2) {
        justify-content: end;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    p {
        font-weight: 200;
        font-size: 1rem;
    }
`