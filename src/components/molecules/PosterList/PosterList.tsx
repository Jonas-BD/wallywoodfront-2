import { useParams } from "react-router-dom"
import { usePostersByGenre, useRandomPosters } from "../../../hooks/usePosters"
import { RandomPosterCard } from "../PosterCard/RandomPosterCard"
import { PosterCard } from "../PosterCard/PosterCard"
import { PosterListStyled } from "./PosterList.styled"

type PosterListProps = {
  mode?: "byGenre" | "random"
}

export const PosterList = ({ mode = "byGenre" }: PosterListProps) => {
  const { genreSlug } = useParams()

  const { posters } =
    mode === "byGenre"
      ? usePostersByGenre({ genre: String(genreSlug) })
      : useRandomPosters()

  return (
    <PosterListStyled>
      {posters.map((poster) => (
        mode === "random" ? (
          <RandomPosterCard
            key={poster.id}
            {...poster}
          />
        ) : (
          <PosterCard
            key={poster.id}
            {...poster}
          />
        )
      ))}
    </PosterListStyled>
  )
}