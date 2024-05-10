import PropTypes from 'prop-types';

const Title = ({ title, numberOfPlaces }) => {
  return <h1 className="is-size-1">{title} ({numberOfPlaces})</h1>;
}

Title.defaultProps = {
  numberOfPlaces: 0,
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfPlaces: PropTypes.number,
}

export default Title;
