export interface Genre {
    id: number
    title: string
    slug: string
}

export interface Poster {
    id: number
    name: string
    description: string
    image: string
    slug: string
    width: number
    height: number
    price: number
    stock: number
    genres: Genre[]
}



export interface User {
    id: number
    firstname: string
    lastname: string
    email: string
    role: string
}

export interface UserData {
    user: User
    token: string
}