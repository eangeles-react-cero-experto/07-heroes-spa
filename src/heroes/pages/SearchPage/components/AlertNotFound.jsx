import PropTypes from "prop-types";

export const AlertNotFound = ({ searchTerm }) => {
  return (
    <div className="alert alert-danger">
      No hero with <b>{searchTerm}</b> found
    </div>
  );
};

AlertNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
