import styled from "styled-components";

export const ContainerStyle = styled.section`
    background-color: ${({ theme }) => theme.colors.light};
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 2.3rem;

    img {
        display: block;
        width: 100%;
    }
`