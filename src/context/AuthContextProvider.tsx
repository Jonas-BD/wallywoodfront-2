import { useEffect, useState } from "react";
import type { UserData } from "../types/api.types";
import { AuthContext } from "./AuthContext";

interface AuthContextProviderInterface {
    children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderInterface) => {
    const [userData, setUserData] = useState<UserData | null>(null)

    useEffect(() => {
        function getLocalUserState() {
            if (localStorage.getItem('userData')) {
                const json = JSON.parse(localStorage.getItem('userData')!)
                setUserData(json)
            }
        }
        getLocalUserState()
    }, [])

    useEffect(() => {
        if (userData !== null) localStorage.setItem('userData', JSON.stringify(userData))
    }, [userData])

    const logout = () => {
        if (localStorage.getItem('userData')) localStorage.removeItem('userData')
        setUserData(null)
    }

    return <AuthContext.Provider value={{ userData, setUserData, logout}}>{children}</AuthContext.Provider>
}