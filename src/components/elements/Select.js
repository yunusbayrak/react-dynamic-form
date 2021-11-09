import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Select = ({ field }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <>
      <label className="form-label">{field.field_label}</label>
      <select
        className="form-select"
        aria-label="Default select example"
        placeholder={field.field_placeholder}
        onChange={(event) => handleChange(field.field_id, event)}
      >
        <option>Open this select menu</option>
        {field.field_options.length > 0 &&
          field.field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
