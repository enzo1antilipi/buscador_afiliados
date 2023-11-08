// import logo from "./logo.svg";
// import padron from "./padron.json";
import PADRON_Defenitivo from "./PADRON_Defenitivo.json";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const dni = 16563822;
  const [resultado, setResultado] = useState(null);
  // console.log(formulario);
  useEffect(() => {
    const formulario = document.getElementById("dni");
    const botonEnv = document.getElementById("botonEnv");
    botonEnv.addEventListener("click", function () {
      //   // event.preventDefault();
      const numero = parseInt(formulario.value);
      // console.log(numero);
      var resultado = PADRON_Defenitivo.data.find(
        (item) => item.DOCUMENTO === numero
      ); //find metodo de busqueda
      // console.log(resultado);
      setResultado(resultado);
    });
  }, []);

  // var resultado = padron.json;

  return (
    <div className="App">
      <h1>Ingrese su Numero de Documento </h1>

      <input type="number" name="elemento" id="dni" className="buscador" />
      <button id="botonEnv" className="boton">
        Enviar
      </button>

      {resultado ? (
        <div className="contenedor">
          <div className="centrado">
            <table className="tabla">
              <tr>
                <th>Documento</th>
                <td>{resultado.DOCUMENTO}</td>
              </tr>{" "}
              <tr>
                <th>Apellido, Nombre</th>
                <td>{resultado["APELLIDO, NOMBRES"]}</td>
              </tr>{" "}
              <tr>
                <th>Escuela</th>
                <td>{resultado.ESCUELA}</td>
              </tr>{" "}
              <tr>
                <th>Mesa</th>
                <td>{resultado.MESA}</td>
              </tr>{" "}
              <tr>
                <th>Regional</th>
                <td>{resultado["REGIONAL"]}</td>
              </tr>{" "}
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
      <div className="cartel">
        <h2 className="letras">
          El 28/10/23 finalizó el plazo para reclamos y/o pedidos de
          rectificación de datos en el padrón electoral. Este es el padrón
          definitivo para los comicios del 28/11/23.
        </h2>
      </div>
    </div>
  );
}

export default App;
