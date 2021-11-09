import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Submit = ({ field }) => {
  const { handleSubmit } = useContext(FormContext);

  return (
    <>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => handleSubmit(e, field)}
      >
        Submit
      </button>
    </>
  );
};

export default Submit;
