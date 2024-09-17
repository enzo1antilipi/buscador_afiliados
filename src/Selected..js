
import { useState } from "react";
import App from "./App";
import Pasivos from "./Pasivos";
function Selected() {

 const [toggleTabs, setToggleTabs] = useState(1);
  const toggleTab = (index) => {
    setToggleTabs(index);
  };


return (
<>
<div className="bloc-onglets">
        <div
          className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Activos</span>
        </div>
        <div
          className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
            <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Pasivos</span>
        </div>
        </div>
         <div className="contenu-onglets">
        <div
          className={toggleTabs === 1 ? "contenu active-contenu" : "contenu"}
        >
          <App  />
        </div>
        <div
          className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}
        >
            <Pasivos/>
        </div>
        </div>
</>

)
}

export default Selected