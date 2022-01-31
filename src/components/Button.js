import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='add-menu-button'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'cadetblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button