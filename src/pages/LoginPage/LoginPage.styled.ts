import styled from "styled-components";

export const LoginPageStyled = styled.section`
    width: 450px;

    h2 {
        margin: 1.5rem 0;
        color: ${({ theme }) => theme.colors.primary};
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .error {
        margin: 0;
        color: #d97855;
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }

    .links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        margin-top: 1.5rem;

        a {
            color: #3489b5;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`