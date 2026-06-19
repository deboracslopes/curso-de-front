import { useState } from "react";


function Pe_pequeno() {
const[resultado,setTotal]= useState(0)
  function calcularPreco(){
    let preco = Number(prompt("Preço do Calçado:"));
    let paresTrocados = Number(prompt("Quantos pares foram trocados:"))
    let totalDePreco = preco * paresTrocados;
    setTotal(totalDePreco);
  }
  return (
    <div className="cont-pe_pequeno">
        <h2>Pé pequeno e as outras coisas</h2>
         <button onClick={calcularPreco}>Calcular preços</button>
         Preços:R${resultado}
      
    </div>
  );
}

export default Pe_pequeno