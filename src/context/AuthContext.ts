import { createContext } from "react";
import type { UserData } from "../types/api.types";

export interface AuthContextType {
    userData: UserData | null
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)