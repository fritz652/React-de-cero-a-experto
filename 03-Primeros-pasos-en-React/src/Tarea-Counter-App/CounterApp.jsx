import { useState } from "react";
import Proptypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c) => c + 1)
  };
  const handleRemove = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>Agrega +1</button>
      <button onClick={handleRemove}>Quitar -1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export { CounterApp };

CounterApp.propTypes = {
  value: Proptypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: "Es un numero",
};
