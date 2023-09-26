import { useContext } from "react";
import { AuthContext } from "../../auth/index.js";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoutesWrapper = ({ children }) => {
  const {
    authState: { isLoggedIn },
  } = useContext(AuthContext);

  if (isLoggedIn) return <Navigate to={"/"} />;
  return children;
};

PublicRoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
