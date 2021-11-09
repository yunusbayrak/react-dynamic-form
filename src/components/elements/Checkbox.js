import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Checkbox = ({ field }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        checked={field.field_value}
        onChange={(event) => handleChange(field.field_id, event)}
      />
      <label className="form-check-label" htmlFor="exampleCheck1">
        {field.field_label}
      </label>
    </div>
  );
};

export default Checkbox;
