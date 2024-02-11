import { useState } from "react";
import Proptypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c) => c + 1)
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>Agrega +1</button>
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
