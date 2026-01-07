import { useState } from "react";

function App() {
  const [mensage, setMensage] = useState("Ola Mundo!");
  return (
    <div>
      <h1>{mensage}</h1>
      <button
        onClick={() => {
          setMensage("Alterado");
        }}
      >Clica</button>
    </div>
  );
}

export default App;
