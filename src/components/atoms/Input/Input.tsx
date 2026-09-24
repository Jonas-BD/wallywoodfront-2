import { InputStyled } from "./Input.styled"
import type { InputProps } from "./Input.types"

export const Input = ({ label, error, id, required, textarea = false, ...props }: InputProps) => {
  return (
    <InputStyled>
        <label htmlFor={id}>
            {label}

            {required && (<span className="required">*</span>)}
        </label>

        <input
            id={id}
            required={required}
            {...props}
        />

        {error && (<span className="error">{error}</span>)}
    </InputStyled>
  )
}
