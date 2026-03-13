import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="page-center">
            <div className="page-header" style={{ textAlign: "center" }}>
                <span className="badge badge-red" style={{ marginBottom: "0.75rem" }}>404</span>
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist or has been moved.</p>
            </div>
            <div className="actions" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
        </div>
    )
}