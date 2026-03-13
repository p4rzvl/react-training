import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { isAuthenticated, login } = useAuth()
    const navigate = useNavigate()
    const { state } = useLocation()
    const from = state?.from?.pathname ?? "/dashboard"

    useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true })
        }
    }, [isAuthenticated, from, navigate])

    const handleLogin = (role) => {
        login(role)
    }

    return (
        <div className="page-center">
            <div className="card">
                <div className="page-header">
                    <h1>Sign in</h1>
                    <p>Choose an account type to continue.</p>
                </div>
                <hr className="divider" />
                <div className="actions" style={{ flexDirection: "column" }}>
                    <button className="btn btn-primary" style={{ justifyContent: "center" }} onClick={() => handleLogin("user")}>
                        Continue as User
                    </button>
                    <button className="btn btn-outline" style={{ justifyContent: "center" }} onClick={() => handleLogin("admin")}>
                        Continue as Admin
                    </button>
                </div>
            </div>
        </div>
    )
}