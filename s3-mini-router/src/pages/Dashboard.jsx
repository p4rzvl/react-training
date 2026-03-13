import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome back, <strong>{user?.name}</strong>. You are logged in as <span className="badge badge-blue">{user?.role}</span>.</p>
      </div>
      <hr className="divider" />
      <p style={{ fontSize: "0.875rem" }}>You have access to this page because you are authenticated.</p>
    </div>
  )
}