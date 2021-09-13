import Button from "./Button";

const Header = ({ onAdd }) => {
  return (
    <header className="header">
      <h1 style={headingStyle}>Task Tracker</h1>
      <div>
        <Button color="green" text="Archived" />
        <Button color="blue" text="Add" buttonFunction={onAdd} />
      </div>
    </header>
  );
};

const headingStyle = {
  color: "black",
};

export default Header;
