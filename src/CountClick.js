import { useState } from "react";

export const CountClick = () => {
  const [value, updateClick] = useState(0);
  return (
    <div>
      <h3>Ilość kliknięć przycisku: {value} </h3>
      <button onClick={() => updateClick(value + 1)}>Kliknij tutaj</button>
    </div>
  );
};
