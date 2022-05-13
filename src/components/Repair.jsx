const Repair = (props) => {
  const { id, description, completed, markCompleted, deleteRepair } = props;

  const onClickRemoveHandler = (e) => {
    // const targetId = +e.target.offsetParent.dataset.id;
    const targetId = e.target.closest("li").dataset.id;
    deleteRepair(targetId);
  };

  const onClickCompleteHandler = (e) => {
    const targetId = e.target.closest("li").dataset.id;
    markCompleted(targetId);
  };

  return (
    <li
      data-id={id}
      className={completed ? "completed" : ""}
      // className={completed && "completed"}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={onClickCompleteHandler}
        />
        <label>{description}</label>
        <button className="destroy" onClick={onClickRemoveHandler}></button>
      </div>
    </li>
  );
};

export default Repair;
