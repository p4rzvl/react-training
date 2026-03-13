import { useAuth } from "../context/AuthContext";

export default function Profile() {
    const { user } = useAuth()

    return (
        <div className="page">
            <div className="page-header">
                <h1>Profile</h1>
                <p>Your account details.</p>
            </div>
            <hr className="divider" />
            <div className="card" style={{ display: "grid", gap: "0.75rem" }}>
                <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Name</p>
                    <p style={{ fontWeight: 500, color: "var(--text-strong)" }}>{user?.name}</p>
                </div>
                <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Role</p>
                    <span className={`badge ${user?.role === "admin" ? "badge-red" : "badge-blue"}`}>{user?.role}</span>
                </div>
            </div>
        </div>
    )
}