import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const  userInfo = sessionStorage.getItem("userInfo");

  return (
    <>
      {userInfo === null ? (
        <Navigate to="/login" state={{ from: location }} replace />
      ) : (
        children
      )}
    </>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
