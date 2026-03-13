import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { isAuthenticated, user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/", { replace: true })
    }

    const linkClass = ({ isActive }) =>
        "nav-link" + (isActive ? " active" : "")

    return (
        <nav className="navbar">
            <span className="navbar-brand">Mini Router</span>

            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>

            {isAuthenticated && (
                <>
                    <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                    <NavLink to="/profile" className={linkClass}>Profile</NavLink>
                </>
            )}

            {isAuthenticated && user?.role === "admin" && (
                <NavLink to="/admin" className={linkClass}>Admin</NavLink>
            )}

            {isAuthenticated ? (
                <>
                    <span className="navbar-user">{user?.name}</span>
                    <button className="btn btn-outline" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <NavLink to="/login" className="btn btn-primary">Login</NavLink>
            )}
        </nav>
    )
}