import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../auth/index.js";
import { Navigate } from "react-router-dom";

export const PrivateRoutesWrapper = ({ children }) => {
  const {
    authState: { isLoggedIn },
  } = useContext(AuthContext);

  if (isLoggedIn) return children;
  return <Navigate to="/login" />;
};

PrivateRoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
