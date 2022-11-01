import React from "react";

function InputForm(props) {
  return (
    <div>
      <label>{props.title}</label>
      <input
        value={props.value}
        required={props.required}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputForm;
