import { Hijo } from "./Hijo";

const Padre = (elPadre) => {
  elPadre = "Tomas, el padre.";
  return (
    <>
      <h2>Soy {elPadre}</h2>
      <Hijo padreName="Tomas" hijoName="Fritz" />
    </>
  );
};

export { Padre };
