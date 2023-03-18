import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";
const Logout = () => {
    const navigate = useNavigate();
    const {user, userLogoutHandler} = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogoutHandler();
                navigate('/');

            })
            .catch(() => {
                navigate('/');
            });
    });
    return null;
};

export default Logout;