import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title, onClick, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'crimson' : 'cadetblue'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onClick}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Lingua Flashcard'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header