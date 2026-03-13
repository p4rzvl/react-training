import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Unauthorized() {
    const { logout } = useAuth()

    return (
        <div className="page-center">
            <div className="page-header" style={{ textAlign: "center" }}>
                <span className="badge badge-red" style={{ marginBottom: "0.75rem" }}>403</span>
                <h1>Access Denied</h1>
                <p>You don't have permission to view this page.</p>
            </div>
            <div className="actions" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
                <Link to="/" className="btn btn-primary">Go Home</Link>
                <button className="btn btn-danger" onClick={logout}>Switch Account</button>
            </div>
        </div>
    )
}