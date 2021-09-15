import Button from "./Button";

const Header = ({ showAdd, showArchived, onAdd, onShowArchived }) => {
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
        <Button
          color={showAdd ? "red" : "blue"}
          text={showAdd ? "Close" : "Add"}
          buttonFunction={onAdd}
        />
      </div>
    </header>
  );
};

const headingStyle = {
  color: "black",
};

export default Header;
