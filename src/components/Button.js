import PropTypes from "prop-types";

const Button = ({ color, text, id, buttonMode, onAdd, onDelete }) => {
  if (buttonMode === "add") {
    return (
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={() => onAdd()}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={() => onDelete(id)}
      >
        {text}
      </button>
    );
  }
};

Button.defaultProps = {
  color: "black",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
