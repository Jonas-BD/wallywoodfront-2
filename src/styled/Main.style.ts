import styled from "styled-components";

export const MainStyle = styled.main`
    margin-top: 2rem;

    h2 {
        color: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.fonts[0]};
    }
`