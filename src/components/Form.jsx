import { useState } from "react";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");
  //If you have a lot of input in the form. You can create Handler for each onChange.
  const onInputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  //Event handler(function) should happen inside the component using it then call the function
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.addRepair(inputValue);
    setInputValue("");
  };
  // if input component is separate(add a state inside of it for controlled component)
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        onChange={onInputChangeHandler}
        name="description"
        className="new-repair"
        placeholder="What needs to be repaired?"
        autoFocus=""
        value={inputValue}
      />
    </form>
  );
};

export default Form;
