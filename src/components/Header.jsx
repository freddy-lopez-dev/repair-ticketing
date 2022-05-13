import Form from "./Form";

const Header = (props) => {
  return (
    <header className="header">
      <h1>rep🔥irs</h1>
      <Form addRepair={props.addRepair} />
    </header>
  );
};

export default Header;
