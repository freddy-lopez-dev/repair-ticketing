const Footer = (props) => {
  return (
    <footer className="footer">
      <button className="clear-completed" onClick={props.removeRepaired}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
