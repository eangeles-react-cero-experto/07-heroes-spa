import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const Navitem = ({ path, label, disabled }) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `nav-link
          ${isActive ? "active" : ""}
          ${disabled ? "disabled" : ""} `
        }
      >
        {label}
      </NavLink>
    </>
  );
};

Navitem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Navitem.defaultProps = {
  disabled: false,
};
