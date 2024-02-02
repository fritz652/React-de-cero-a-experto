import React from "react";

const newMessaje = {
  menssaje: "Hola Fritz",
  title: "eres muy guapo",
};

const App = () => {
  return (
    <>
      <h1>{newMessaje.menssaje}</h1>
      <h2>{newMessaje.title}</h2>
      <p>Los confirmo</p>
    </>
  );
};

export { App };
