import { createContext} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLoginHandler = (authData) => {
        setAuth(authData);
      };

      const userRegisterHandler = (authData) => {
        setAuth(authData)
      }
      const userLogoutHandler = () => {
        setAuth({});
      };
    return (
        <AuthContext.Provider value={{user: auth, userRegisterHandler, userLoginHandler, userLogoutHandler, isAuthenticated: !!auth.accessToken}}>
            {children}
        </AuthContext.Provider>
    );
}