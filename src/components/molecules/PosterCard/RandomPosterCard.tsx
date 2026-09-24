import type { Poster } from "../../../types/api.types"
import { RandomPosterCardStyled } from "./RandomPosterCard.styled"

export const RandomPosterCard = ({ name, description, image, genres } : Poster) => {
  return (
    <RandomPosterCardStyled>
        <figure>
            <img src={image} alt={name} />
        </figure>

        <div className="content">
            <h4 dangerouslySetInnerHTML={{ __html: name }}></h4>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>

            <p>Genre: {genres.map((genre) => genre.title).join(", ")}</p>

            <div className="actions">
                <button>Læs mere</button>
                <button>♡</button>
            </div>
        </div>
    </RandomPosterCardStyled>
  )
}
