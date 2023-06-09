import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext);

    if(!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return children
};
export default PrivateRoute;