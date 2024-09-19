import { useCurrentUser } from '@/context/userContext'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const location = useLocation()
    const { currentUser } = useCurrentUser()

    if (location.pathname === '/login' && currentUser?.email) {
        return <Navigate to="/" replace />
    }

    return currentUser?.email ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute