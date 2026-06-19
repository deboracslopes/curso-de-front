import { useState } from "react"


function GuilhermePortoes() {
    const[resultado,setResultado] = useState()
    function calcularDevs(){
        let estagiarios = Number(prompt("Quantos estagiarios:"));
        let clt = Number (prompt("Quantos clts?"));
        let pj = Number(prompt("Quantos pj?"));
        let totalDeDevs = estagiarios + clt +pj;
        setResultado(totalDeDevs);
    }
  return (
    <div className="cont-GuilhermePortoes">
        <h2>Guilherme Portões </h2>
         <button onClick={calcularDevs}>Calcular preços</button>
        Total foi: {resultado}
      
    </div>
  )
}

export default GuilhermePortoes