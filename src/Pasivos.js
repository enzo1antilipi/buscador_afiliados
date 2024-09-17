import { useEffect,useState } from "react";
import PADRONPASIVOS from "./PADRONPASIVOS.json";
import "./App.css";

function Pasivos (){
//   const [resultado, setResultado] = useState(0);
//   // console.log(formulario);
//   useEffect(() => {
//     const formulario = document.getElementById("dnii");
//     const botonEnv = document.getElementById("botonEnvi");
//     botonEnv.addEventListener("click", function () {
//       //   // event.preventDefault();
//       const numero = parseInt(formulario.value);
//       console.log("numero",numero);
//       var resultado = PADRONPASIVOS.data.find(
//         (item) => item.Column2 === numero
//       ); //find metodo de busqueda
//       // console.log(resultado);
//       setResultado(resultado);
//       console.log("resultado",resultado)
//     });
//   }, []);


//     return(
//         <div className="App">
//       <h1>Busqueda de usuarios Pasivos </h1>

//       <input type="number" name="elemento" id="dnii" className="buscador" />
//       <button id="botonEnvi" className="boton">
//         Buscar
//       </button>

//       {resultado ? (
//         <div className="contenedor">
//           <div className="centrado">
//             <table className="tabla">
//               {/* <tr>
//                 <th>Documento</th>
//                 <td>{resultado.Column2}</td>
//               </tr>{" "} */}
//               <tr>
//                 <th>Apellido, Nombre</th>
//                 <td>{resultado["Column3"]}</td>
//               </tr>{" "}
//               <tr>
//                 <th>Localidad</th>
//                 <td>{resultado["Column4"]}</td>
//               </tr>{" "}
//               {/* <tr>
//                 <th>Mesa</th>
//                 <td>{resultado.MESA}</td>
//               </tr>{" "} */}
//               {/* <tr>
//                 <th>Regional</th>
//                 <td>{resultado["REGIONAL"]}</td>
//               </tr>{" "} */}
//             </table>
//             {/* <h1>Documento:{resultado.DOCUMENTO}</h1>
//           <h1>{resultado["APELLIDO, NOMBRES"]}</h1>
//           <h1>{resultado.ESCUELA}</h1>
//           <h1>{resultado["REGIONAL "]}</h1> */}
//           </div>
//         </div>
//       ) : (
//         <h2>
//           No se ingreso un numero valido o el numero de documento no coincide
//           con ningun afiliado
//         </h2>
//       )}
//       {/* <div className="cartel">
//         <h2 className="letras">
//           El 28/10/23 finalizó el plazo para reclamos y/o pedidos de
//           rectificación de datos en el padrón electoral. Este es el padrón
//           definitivo para los comicios del 28/11/23.
//         </h2>
//       </div> */}
//     </div>
  const [resultado, setResultado] = useState(null);
  const [sugerencias, setSugerencias] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [modoBusqueda, setModoBusqueda] = useState("nombre"); // Estado para controlar el modo de búsqueda

  // Función para manejar el cambio en el campo de entrada
  const handleInputChange = (e) => {
    const valor = e.target.value;
    setInputValue(valor);

    if (modoBusqueda === "nombre" && valor.length > 2) {
      // Si el modo es "nombre" y hay más de 2 caracteres, buscar coincidencias
      const sugerenciasFiltradas = PADRONPASIVOS.data.filter((item) =>
        item.Column3.toLowerCase().startsWith(valor.toLowerCase())
      );
      setSugerencias(sugerenciasFiltradas);
    } else {
      setSugerencias([]);
    }
  };

  // Función para manejar la selección de una sugerencia
  const handleSuggestionClick = (sugerencia) => {
    setResultado(sugerencia);
    setInputValue(sugerencia.Column3); // Coloca el apellido seleccionado en el campo de entrada
    setSugerencias([]); // Limpia las sugerencias una vez que se selecciona una
  };

  // Función para manejar la búsqueda por documento
  const handleBuscarPorDocumento = () => {
    const numeroDocumento = parseInt(inputValue);
    const resultadoDoc = PADRONPASIVOS.data.find(
      (item) => item.Column2 === numeroDocumento
    );
    setResultado(resultadoDoc);
  };

  return (
    <div className="App">
      <h1>Búsqueda de usuarios Pasivos</h1>

      {/* Selector para cambiar el modo de búsqueda */}
      <div style={{marginBottom:"30px"}}>
        <label style={{fontFamily:"sans-serif", marginRight:"40px",fontSize:"20px"}}>
          <input
            type="radio"
            value="nombre"
            checked={modoBusqueda === "nombre"}
            onChange={() => setModoBusqueda("nombre")}
          />
          Buscar por apellido
        </label>
        <label style={{fontFamily:"sans-serif",fontSize:"20px"}}>
          <input
            type="radio"
            value="documento"
            checked={modoBusqueda === "documento"}
            onChange={() => setModoBusqueda("documento")}
          />
          Buscar por documento
        </label>
      </div>

      {/* Input para buscar por nombre o documento */}
      <input
        type={modoBusqueda === "nombre" ? "text" : "number"}
        id="dnii"
        className="buscador"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={
          modoBusqueda === "nombre" ? "Ingresa el apellido" : "Ingresa el documento"
        }
      />
      <button
        id="botonEnvi"
        className="boton"
        onClick={() => {
          if (modoBusqueda === "documento") {
            handleBuscarPorDocumento();
          }
        }}
      >
        Buscar
      </button>

      {/* Mostrar sugerencias de autocompletado si se busca por nombre */}
      {modoBusqueda === "nombre" && sugerencias.length > 0 && (
        <ul className="sugerencias-lista">
          {sugerencias.map((item) => (
            <li
              key={item.Column2}
              onClick={() => handleSuggestionClick(item)}
              className="sugerencia-item"
            >
              {item.Column3} - {item.Column4}- {item.Column2}
            </li>
          ))}
        </ul>
      )}

      {/* Mostrar el resultado */}
      {resultado ? (
        <div className="contenedor">
          <div className="centrado">
            <table className="tabla">
              <tr>
                <th>Apellido, Nombre</th>
                <td>{resultado.Column3}</td>
              </tr>
              <tr>
                <th>Localidad</th>
                <td>{resultado.Column4}</td>
              </tr>
              <tr>
                <th>DNI</th>
                <td>{resultado.Column2}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : (
        <h2>No se encontró un resultado válido</h2>
      )}
    </div>

    )
}

export default Pasivos