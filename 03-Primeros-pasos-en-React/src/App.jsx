import "./App.css";
import { TheDefaultProps } from "./defaultProps/defaultProps";
import { ThePropTypes } from "./propTypes/PropTypes";
import { Padre } from "./props/Padre";
const newMessaje = {
  menssaje: "Hola Fritz",
  title: "eres muy guapo",
};

const App = () => {
  return (
    <>
      <h1>{newMessaje.menssaje}</h1>
      <h2>{newMessaje.title}</h2>
      <p>Lo confirmo</p>
      <Padre />
      <ThePropTypes title="Hello soy una prop de tipo boleano y requerido" />
      <TheDefaultProps />
    </>
  );
};

export { App };
