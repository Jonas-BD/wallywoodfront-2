import { ButtonStyled } from "./Button.styled"
import type { ButtonProps } from "./Button.types"

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonStyled {...props}>
        {children}
    </ButtonStyled>
  )
}
