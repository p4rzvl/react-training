export default function Admin() {
    return (
        <div className="page">
            <div className="page-header">
                <h1>Admin Panel</h1>
                <p>This page is restricted to <span className="badge badge-red">admin</span> users only.</p>
            </div>
            <hr className="divider" />
            <p style={{ fontSize: "0.875rem" }}>Manage users, roles, and application settings here.</p>
        </div>
    )
}
