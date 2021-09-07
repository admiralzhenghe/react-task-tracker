import Button from './Button'

const Header = () => {
    return (
        <header className='header'>
            <h1 style={headingStyle}>Task Tracker</h1>
            <Button color="dodgerblue" text="Add" />
        </header>
    );
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default Header