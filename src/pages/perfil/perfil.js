import {React} from "react";
import "./perfil.css"
import Navbar from "../components/navbar/navbar";



function Perfil(){

    return (
        <div> 
          <Navbar/>
          <div  className="main-perfil">  
          <h1 className="h1-perfil">PERFIL</h1>
          <form className="form-size"  onSubmit={console.log("contraseña actuallizada")}>
            <div className='div_form'>
                    <label className="label-form">Email:</label>
                    <h3 className="h3-form"> email@gmail.com</h3>
                </div>

                <div className='div_form'>
                  <label className="label-form">Nombre:</label>
                  <h3 className="h3-form">Juan Perez</h3>
                </div>

                <div className='div_form'>
                  <label className="label-form">Contraseña Actual</label>
                  <input className="imput-form"
                     type="password" 
                     placeholder="Contraseña">
                   </input>
                </div>


                <div className='div_form'>
                  <label className="label-form">Nueva Contraseña</label>
                  <input className="imput-form"
                     type="password" 
                     placeholder="ingresar nueva contraseña">
                   </input>
                </div>

                <div className='div_form'>
                  <label className="label-form">Confirmar Contraseña</label>
                  <input className="imput-form" 
                    type="password" 
                    placeholder="confirmar contraseña">
                  </input>
                </div>
                <button className="boton-form" type="submit">
                    Guardar
                </button>
                
            </form>
          </div>
           
        </div>
    );
}

export default Perfil;