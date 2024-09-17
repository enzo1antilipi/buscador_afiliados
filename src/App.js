// import logo from "./logo.svg";
// import padron from "./padron.json";
import PADRONACTIVOS from "./PADRONACTIVOS.json";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  
  // const dni = 16563822;
  const [resultado, setResultado] = useState(0);
  // console.log(formulario);
  useEffect(() => {
    const formulario = document.getElementById("dni");
    const botonEnv = document.getElementById("botonEnv");
    botonEnv.addEventListener("click", function () {
      //   // event.preventDefault();
      const numero = parseInt(formulario.value);
      // console.log(numero);
      var resultado = PADRONACTIVOS.data.find(
        (item) => item.Column2 === numero
      ); //find metodo de busqueda
      // console.log(resultado);
      setResultado(resultado);
    });
  }, []);

  // var resultado = padron.json;

  return (
    <div className="App">
      
      <h1>Busqueda de Activos </h1>

      <input type="number" name="elemento" id="dni" className="buscador" />
      <button id="botonEnv" className="boton">
        Buscar
      </button>

      {resultado ? (
        <div className="contenedor">
          <div className="centrado">
            <table className="tabla">
              {/* <tr>
                <th>Documento</th>
                <td>{resultado.Column2}</td>
              </tr>{" "} */}
              <tr>
                <th>Apellido, Nombre</th>
                <td>{resultado["Column3"]}</td>
              </tr>{" "}
              <tr>
                <th>Localidad</th>
                <td>{resultado["Column4"]}</td>
              </tr>{" "}
              {/* <tr>
                <th>Mesa</th>
                <td>{resultado.MESA}</td>
              </tr>{" "} */}
              {/* <tr>
                <th>Regional</th>
                <td>{resultado["REGIONAL"]}</td>
              </tr>{" "} */}
            </table>
            {/* <h1>Documento:{resultado.DOCUMENTO}</h1>
          <h1>{resultado["APELLIDO, NOMBRES"]}</h1>
          <h1>{resultado.ESCUELA}</h1>
          <h1>{resultado["REGIONAL "]}</h1> */}
          </div>
        </div>
      ) : (
        <h2>
          No se ingreso un numero valido o el numero de documento no coincide
          con ningun afiliado
        </h2>
      )}
      {/* <div className="cartel">
        <h2 className="letras">
          El 28/10/23 finalizó el plazo para reclamos y/o pedidos de
          rectificación de datos en el padrón electoral. Este es el padrón
          definitivo para los comicios del 28/11/23.
        </h2>
      </div> */}
    </div>
  );
}

export default App;
