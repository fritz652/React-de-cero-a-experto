// se tiene que importar e instar de react    npm add prop-types

import PropTypes from "prop-types"; // las PropTypes sirve para determinar el tipo a las props

const TheDefaultProps = ({ title, subTitle }) => {
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

export { TheDefaultProps };

TheDefaultProps.propTypes = {
  title: PropTypes.string.isRequired, // Aqui estamos haciendo que la prop title sea de tipo strind y si o si requerida, sino habra error, por tanto en App.jsx cuando mande el valor del prop debe cumplir con ello.
};

TheDefaultProps.defaultProps = {
  title: "No hay titulo, por default se muestra esto.", // Se manda aqui por default el valor de una prop, esto se envia antes que los protoTipes, a pesar que por convencion va al final.
};
