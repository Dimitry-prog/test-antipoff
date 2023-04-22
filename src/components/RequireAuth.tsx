import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const token = false;
  const location = useLocation();

  return token ? <Outlet/> : <Navigate to="/signin" replace state={{ pathname: location.pathname }}/>
};

export default RequireAuth;