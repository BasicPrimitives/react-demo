import PropTypes from 'prop-types';

const ButtonConfig = () => PropTypes.shape({
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
});

export default ButtonConfig;
