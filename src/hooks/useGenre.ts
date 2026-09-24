import { API_URL } from "../config/api"
import type { Genre } from "../types/api.types"
import { useFetch } from "./useFetch"

export const useGenres = () => {
    const { data, error } = useFetch<Genre[]>(`${API_URL}/genres`)

    return {
        genres: data ?? [],
        isLoading: data === null && error === null,
        error
    }
}