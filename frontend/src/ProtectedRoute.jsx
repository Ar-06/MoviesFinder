import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRoute = () => {
  const { loading, isAuthenticated, redirectAfterLogout } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (!loading && !isAuthenticated) {
    return redirectAfterLogout ? (
      <Navigate to="/" replace />
    ) : (
      <Navigate to="/auth" replace />
    );
  }

  return <Outlet />;
};
