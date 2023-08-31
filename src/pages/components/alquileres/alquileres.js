import {React} from "react";
import "./alquileres.css";
import Navbar from "../../components/navbar/navbar";
import BicicletasDisponibles from "../../components/bicicletasDisponibles/bicicletasDisponibles";
import MisAlquileres from "../misAlquileres/misAlquileres";

const ITEMS = [
    { title: "BICICLETA 1", description: "modelo 2023"},
    { title: "BICICLETA 2", description: "modelo 2023"},
    { title: "BICICLETA 3", description: "modelo 2023"},
    { title: "BICICLETA 4", description: "modelo 2023"},
]

function Alquileres(){

    return (
        <div className="main"> 
        <Navbar/>
         <h1 className="h1-home"> MIS ALQUILERES  </h1>
         <div className="bicicletas-disp-size">
           <div className="bicicletas-disp-container"> 
             {ITEMS.map((item,index) => {
                return (  <MisAlquileres
                  key={index}
                  title={item.title}
                  description={item.description}
                />
                );
             })}
            </div>
        
         </div>
        </div>
    );
}

export default Alquileres;