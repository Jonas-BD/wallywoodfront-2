import { Nav } from "../Nav/Nav"
import { HeaderStyled } from "./Header.styled"

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>WALLYWOOD</h1>
      <Nav />
    </HeaderStyled>
  )
}
