import { Outlet, useParams } from "react-router-dom"
import { GenreList } from "../../components/molecules/GenreList/GenreList"
import { ContentWrapper } from "../../layout/ContentWrapper"
import { PosterPageStyled } from "./PosterPage.styled"
import { useGenres } from "../../hooks/useGenre"

export const PosterPage = () => {
  const {genres} = useGenres()
  const { genreSlug } = useParams()

  const currentGenre = genres.find((genre) => genre.slug === genreSlug)

  return (
    <ContentWrapper pageTitle={`Plakater ${currentGenre ? `- ${currentGenre.title}` : ""}`}>
      <PosterPageStyled>
        <aside>
          <h2>Filtre</h2>

          <h3>Genre</h3>
          <GenreList />

          <h3 className="favorites">Favoritter</h3>
        </aside>
        <section className="poster-content">
          <Outlet />
        </section>
      </PosterPageStyled>
    </ContentWrapper>
  )
}
