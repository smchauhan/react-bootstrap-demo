import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const login = localStorage.getItem("login")
    return login === "true" ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
