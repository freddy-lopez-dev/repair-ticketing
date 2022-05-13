const Repair = (props) => {
  const { id, description, completed, markCompleted } = props;
  return (
    <li
      data-id={id}
      className={completed ? "completed" : ""}
      // className={completed && "completed"}
    >
      <div className="view">
        <input className="toggle" type="checkbox" onClick={markCompleted} />
        <label>{description}</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
};

export default Repair;
