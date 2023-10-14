import logo from "./logo.svg";
import padron from "./padron.json";
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
      var resultado = padron.data.find((item) => item.DOCUMENTO === numero); //find metodo de busqueda
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
                <th>Regional</th>
                <td>{resultado["REGIONAL "]}</td>
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
          En caso de no figurar en el padrón o si observa datos erróneos,
          comunicarse por mail a secgremial@atech.org.ar , adjuntando el recibo
          de haberes de Agosto de 2023.
        </h2>
      </div>
    </div>
  );
}

export default App;
