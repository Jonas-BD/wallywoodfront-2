import styled from "styled-components";

export const NavStyled = styled.nav`
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

    ul {
        display: flex;
        list-style: none;
        gap: 2.5rem;
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.textcolor};
        font-family: ${({ theme }) => theme.fonts[1]};
    }

    a:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
    a.active {
        color: ${({ theme }) => theme.colors.primary};
    }
`