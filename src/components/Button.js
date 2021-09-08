import PropTypes from 'prop-types'

const Button = ({ color, id, text, onDelete }) => {
    return (
        <button
            style = {{backgroundColor: color}}
            className='btn'
            onClick={() => onDelete(id)}>
                {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button