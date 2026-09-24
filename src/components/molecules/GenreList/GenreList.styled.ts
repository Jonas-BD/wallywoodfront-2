import styled from "styled-components";

export const GenreListStyled = styled.nav`
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textcolor};
    }

    a:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
    a.active {
        color: ${({ theme }) => theme.colors.primary};
    }
`