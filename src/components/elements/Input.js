import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ field }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {field.field_label}
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby={field.field_id + "Help"}
        placeholder={field.field_placeholder ? field.field_placeholder : ""}
        value={field.field_value}
        onChange={(event) => handleChange(field.field_id, event)}
      />
      <div id={field.field_id + "Help"} className="form-text">
        {field.field_help}
      </div>
    </div>
  );
};

export default Input;
