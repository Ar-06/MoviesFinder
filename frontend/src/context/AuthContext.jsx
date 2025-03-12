import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  logoutRequest,
} from "../api/auth.js";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirectAfterLogout, setRedirectAfterLogout] = useState(false);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log("Token en cookies", document.cookie);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      Cookies.remove("token");
      setUser(null);
      setIsAuthenticated(false);
      setRedirectAfterLogout(true);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const initialUser = () => {
    let initials = "";
    if (user?.username) {
      const nameParts = user.username.split(" ");
      initials = nameParts
        .map((part) => part[0])
        .join("")
        .toUpperCase();
    }
    return initials;
  };

  useEffect(() => {
    async function checkLogin() {
      try {
        
        const res = await verifyTokenRequest(); 

        if (!res.data) {
          setIsAuthenticated(false);
          setUser(null);
        } else {
          setIsAuthenticated(true);
          setUser(res.data);
        }
      } catch (error) {
        console.error("Error verificando login:", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        loading,
        user,
        isAuthenticated,
        errors,
        initialUser,
        redirectAfterLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
