import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="page">
            <div className="page-header">
                <h1>Welcome Home</h1>
                <p>A minimal React Router demo with role-based authentication.</p>
            </div>
            <div className="actions">
                <Link to="/about" className="btn btn-primary">Learn more</Link>
                <Link to="/login" className="btn btn-outline">Get started</Link>
            </div>
        </div>
    )
}