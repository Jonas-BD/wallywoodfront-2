import { useParams } from "react-router-dom"
import { PosterDetailsStyled } from "./PosterDetails.styled"
import { usePoster } from "../../../hooks/usePosters"
import { formatPrice } from "../../../utils/formatPrice"

export const PosterDetails = () => {
    const { posterId } = useParams()

    const { poster, isLoading, error } = usePoster(String(posterId))

    if (isLoading) {
        return <p>Indlæser...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (!poster) {
        return <p>Plakaten blev ikke fundet.</p>
    }

    return (
        <PosterDetailsStyled>
            <div className="poster-info">
                <h2>{poster.name}</h2>

                {poster.description && (
                    <div
                        className="description"
                        dangerouslySetInnerHTML={{ __html: poster.description }}
                    />
                )}

                <div className="poster-meta">
                    <p>
                        Størrelse: {poster.width} x {poster.height} cm
                    </p>

                    <p>
                        Varenummer (SKU): {poster.id}
                    </p>
                </div>

                <h3 className="price">
                    Pris: {formatPrice(poster.price)} DKK
                </h3>

                <div className="actions">
                    <button className="cart-button">
                        Læg i kurv
                    </button>

                    <button
                        className="favorite-button"
                        aria-label="Tilføj til favoritter"
                    >
                        ♡
                    </button>
                </div>
            </div>

            <figure>
                <img src={poster.image} alt={poster.name} />
            </figure>
        </PosterDetailsStyled>
    )
}
