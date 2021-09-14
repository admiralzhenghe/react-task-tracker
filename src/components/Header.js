import Button from "./Button";

const Header = ({ onAdd, onShowArchived }) => {
  return (
    <header className="header">
      <h1 style={headingStyle}>Task Tracker</h1>
      <div>
        <Button
          color="goldenrod"
          text="Archived"
          buttonFunction={onShowArchived}
        />
        <span> </span>
        <Button color="blue" text="Add" buttonFunction={onAdd} />
      </div>
    </header>
  );
};

const headingStyle = {
  color: "black",
};

export default Header;
