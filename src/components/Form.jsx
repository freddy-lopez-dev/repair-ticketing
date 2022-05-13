const Form = (props) => {
  const { addRepair } = props;
  return (
    <form onSubmit={addRepair}>
      <input
        name="description"
        className="new-repair"
        placeholder="What needs to be repaired?"
        autoFocus=""
      />
    </form>
  );
};

export default Form;
