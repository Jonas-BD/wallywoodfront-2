import { API_URL } from "../config/api"
import type { Poster } from "../types/api.types"
import { useFetch } from "./useFetch"

export interface PosterQuery {
    genre?: string
    limit?: number
    random?: boolean
}

export const usePosters = () => {
    const { data, error } = useFetch<Poster[]>(`${API_URL}/posters`)

    return {
        posters: data ?? [],
        isLoading: data === null && error === null,
        error
    }
}

export const useRandomPosters = () => {
    const { data, error } = useFetch<Poster[]>(`${API_URL}/posters`)

    const posters = data ? [...data].sort(() => 0.5 - Math.random()).slice(0, 4) : []

    return {
        posters,
        isLoading: data === null && error === null,
        error
    }
}

export const usePostersByGenre = ({genre}:{genre: string}) => {
    const { data, error } = useFetch<Poster[]>(`${API_URL}/posters?genreSlug=${genre}`)

    return {
        posters: data ?? [],
        isLoading: data === null && error === null,
        error
    }
}

export const usePoster = (id: string) => {
    const { data, error } = useFetch<Poster>(`${API_URL}/posters/${id}`)

    return {
        poster: data,
        isLoading: data === null && error === null,
        error
    }
}