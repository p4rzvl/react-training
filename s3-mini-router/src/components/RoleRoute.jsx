import {Navigate, Outlet, useLocation} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleRoute({ allowedRoles }){
    const {user, isAuthenticated, isLoading} = useAuth()
    const location = useLocation()

    if (isLoading) return <>Loading.....</>

    if(!isAuthenticated) {
        return <Navigate to="/login" state={{from: location}} replace />
    }
    if (!allowedRoles.includes(user.role)){
        return <Navigate to="/unauthorized" replace />
    }

    return <Outlet/>
}