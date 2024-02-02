// se tiene que importar e instar de react    npm add prop-types

import PropTypes from "prop-types"; // las PropTypes sirve para determinar el tipo a las props

const ThePropTypes = ({ title, subTitle }) => {
  if (!title) {
    throw new Error("El title no existe");
  }
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export { ThePropTypes };

ThePropTypes.propTypes = {
  title: PropTypes.string.isRequired, // Aqui estamos haciendo que la prop title sea de tipo strind y si o si requerida, sino habra error, por tanto en App.jsx cuando mande el valor del prop debe cumplir con ello.
};
