import { use, useState, useEffect } from "react";

export default (initialValues, dependencies = []) => {
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, dependencies);

  const handler = (event) => {
    let value = event.target.value;
    if (event.target.value.toLocaleLowerCase() === "true") {
      value = true;
    }
    if (event.target.value.toLocaleLowerCase() === "false") {
      value = false;
    }
    setValues({ ...values, [event.target.name]: value });
  };

  return [values, handler];
};
