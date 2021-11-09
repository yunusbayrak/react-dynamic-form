import formJSON from "./formElement.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";
function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0]);
  }, []);
  const { fields, page_label } = elements ?? {};
  const handleSubmit = (event, field) => {
    event.preventDefault();
    var data = [];
    elements.fields.map(
      (field, i) => (data[field.field_id] = field.field_value)
    );
    console.log(field.field_url, data);
  };
  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;

          default:
            field["field_value"] = event.target.value;
            console.log(event.target.checked);
            break;
        }
      }
      setElements(newElements);
    });
    console.log(elements);
  };
  return (
    <FormContext.Provider value={{ handleChange, handleSubmit }}>
      <div className="App container">
        <h3>{page_label}</h3>
        <form>
          {fields
            ? fields.map((field, i) => <Element key={i} field={field} />)
            : null}
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
