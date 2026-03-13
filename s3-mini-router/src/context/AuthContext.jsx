import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const isAuthenticated = !!user

    const login = (role) => {
        setIsLoading(true)
        setTimeout(() => {
            setUser({ name: "Parva Kumar", role })
            setIsLoading(false)
        }, 500)
    }

    const logout = () => setUser(null)
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be inside AuthProvider")
    return context
}