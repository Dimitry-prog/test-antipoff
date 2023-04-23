import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks.ts";

const RequireAuth = () => {
  const token = useAppSelector(state => state.auth.authInfo.token);
  const location = useLocation();

  return token ? <Outlet/> : <Navigate to="/signin" replace state={{ pathname: location.pathname }}/>
};

export default RequireAuth;