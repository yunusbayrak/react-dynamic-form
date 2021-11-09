import React from "react";
import Checkbox from "./elements/Checkbox";
import Input from "./elements/Input";
import Select from "./elements/Select";
import Submit from "./elements/Submit";
const Components = {
  text: Input,
  select: Select,
  checkbox: Checkbox,
  submit: Submit,
};
const Element = ({ field }) => {
  //   switch (field.field_type) {
  //     case "text":
  //       return <Input field={field} />;
  //     case "select":
  //       return <Select field={field} />;
  //     case "checkbox":
  //       return <Checkbox field={field} />;
  //     default:
  //       return null;
  //   }
  if (typeof Components[field.field_type] !== "undefined") {
    return React.createElement(Components[field.field_type], { field: field });
  }
  return React.createElement(
    () => <div>The component {field.field_type} has not been created yet.</div>,
    { field: field }
  );
  //   return (
  //     <>
  //       <Input />
  //       <Submit />
  //     </>
  //   );
};

export default Element;
