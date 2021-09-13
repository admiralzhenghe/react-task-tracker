import PropTypes from "prop-types";

const Button = ({ color, text, buttonFunction }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={buttonFunction}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
