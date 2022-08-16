import { useState } from "react";

export const CountClick = (props) => {
  const [value, updateClick] = useState(props.startCounter);
  const increment = () => updateClick(value + 1)
  return (
    <div>
      <h3>Ilość kliknięć przycisku: {value} </h3>
      <button onClick={increment}>Zwiększ wartość</button>
    </div>
  );
};
