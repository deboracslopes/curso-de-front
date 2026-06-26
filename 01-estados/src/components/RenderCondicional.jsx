import { useState } from "react";

function RenderCondicional() {
    const[dado, setDado] = useState(0);
     

    //const demo = useState('Eu sou o demo');
    function sortearNumero(){
        let n = Math.ceil(Math.random()*6);
        setDado(n);

       //console.log(demo);
    }
  return (
    <div className='cont-renderCondicional'>
        <h2>RenderCondicional</h2>
        { dado && <p>{dado}</p>}
     
          {dado ? <p>🎲{dado}</p> : <p>Aperta aí o butao </p>}

        {/* {dado} */}
        <button onClick = {sortearNumero}>Sorteia</button>
    </div>
  )
}

export default RenderCondicional