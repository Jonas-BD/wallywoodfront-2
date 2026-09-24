import { NavLink } from "react-router-dom"
import type { Poster } from "../../../types/api.types"
import { formatPrice } from "../../../utils/formatPrice"
import { PosterCardStyled } from "./PosterCard.styled"

export const PosterCard = ({ id, name, image, price } : Poster) => {
  return (
    <PosterCardStyled>
      <figure>
        <NavLink to={`${id}`}>
          <img src={image} alt={name} />
        </NavLink>
      </figure>

      <div className="content">
        <h3>{name}</h3>

        <h4>kr. {formatPrice(price)}</h4>

        <div className="actions">
            <button>Læg i kurv</button>
            <button>♡</button>
        </div>
      </div>
    </PosterCardStyled>
  )
}
