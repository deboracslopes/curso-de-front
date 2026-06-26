import { useState } from "react";
import "./App.css";
import Peba from "./components/Peba";
import Pe_pequeno from "./components/Pe_pequeno";
import GuilhermePortoes from "./components/GuilhermePortoes";
import RenderCondicional from "./components/RenderCondicional";

function App() {
  const [rendimento, setRendimento] = useState(12000);
  let salario = 10002;

  function incrementarSalario() {
    salario += 10;
    console.log("Salário atualizado: R$" + salario);
    setRendimento();
  }
  return (
    <div className="cont-app">
      <h1>Estados e outras coisas</h1>
      <Pe_pequeno />
      <hr />
      <GuilhermePortoes />
      <hr />
      <Peba />
       <hr />
       <RenderCondicional />
       <hr></hr>
      Salario: R${salario.toFixed(2).replace(".", ",")}
      <p>Rendimento: R${rendimento.toFixed(2).replace(".", ",")}</p>
      <button onClick={incrementarSalario}>➕</button>
    </div>
  );
}

export default App;