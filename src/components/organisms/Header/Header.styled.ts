import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: ${({ theme }) => theme.colors.light};

    border-bottom: 1px solid ${({ theme }) => theme.colors.background};

    h1 {
        font-family: ${({ theme }) => theme.fonts[0]};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 900;
        font-size: 3.4rem;
    }
`