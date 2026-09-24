import styled from "styled-components";

export const ContactPageStyled = styled.section`
    width: 765px;

    h2 {
        margin: 0 0 2rem;
        font-size: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .buttons {
        display: flex;
        gap: 2rem;

        button {
            min-width: 235px;
            height: 64px;
            font-size: 1.25rem;
        }
    }
`