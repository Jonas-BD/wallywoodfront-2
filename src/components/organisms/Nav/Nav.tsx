import { NavLink } from "react-router-dom"
import { NavStyled } from "./Nav.styled"

export const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posters">Plakater</NavLink>
        </li>
        <li>
          <NavLink to="/about">Om os</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </NavStyled>
  )
}
