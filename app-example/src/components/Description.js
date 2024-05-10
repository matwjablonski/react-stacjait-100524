import PropTypes from 'prop-types';

export const Description = ({ children }) => (
  <p className="is-size-4 mb-4">{children}</p>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
}
