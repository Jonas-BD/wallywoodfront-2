import { NavLink } from "react-router-dom"
import { useGenres } from "../../../hooks/useGenre"
import { GenreListStyled } from "./GenreList.styled"

export const GenreList = () => {
    const { genres } = useGenres()

  return (
    <GenreListStyled>
      {genres.map((genre) => {
        return (
            <li key={genre.id}>
                <NavLink to={`/posters/${genre.slug}`}>{genre.title}</NavLink>
            </li>
        )
      })}
    </GenreListStyled>
  )
}
