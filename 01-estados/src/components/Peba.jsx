import { useState } from "react";


export default function Peba() {
    const[resultado,setResultado]= useState()
    function calcularPontos(){
      let vitorias = Number(prompt("Vitórias:"));
      let empates = Number(prompt("Empates:"));
      let pontos = vitorias*3 + empates;
      setResultado(pontos);
    }
  return (
    <div className="cont-peba">
       <h2>Peba e o campeonato</h2>
       <button onClick={calcularPontos}>Calcular pontos</button>
       Pontos: {resultado}

    </div>
  )
}
