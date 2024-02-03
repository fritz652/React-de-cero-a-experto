import Proptypes from "prop-types";

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
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
