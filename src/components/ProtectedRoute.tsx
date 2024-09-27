import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem('auth-token');

  if (!token) {
    return <Navigate to="/Login" />;
  }

  return children;
};
