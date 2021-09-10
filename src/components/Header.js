import Button from "./Button";

const Header = ({ onAdd }) => {
  return (
    <header className="header">
      <h1 style={headingStyle}>Task Tracker</h1>
      <Button color="blue" text="Add" buttonMode="add" onAdd={onAdd} />
    </header>
  );
};

const headingStyle = {
  color: "black",
};

export default Header;
