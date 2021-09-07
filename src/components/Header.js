import Button from './Button'

const Header = () => {
    return (
        <header className='header'>
            <h1 style={ headingStyle }>Task Tracker</h1>
            <Button color="green" text="Add" />
        </header>
    );
}

const headingStyle = {
    color: 'black',
}

export default Header