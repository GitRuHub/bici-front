import {React} from "react";
import "./register.css"
import Navbar from "../components/navbar/navbar";



function Register(){

    return (
        <div> 
          <Navbar/>
          <div  className="main-register">  
          <h1 className="h1-register">REGISTRO DE USUARIO </h1>
          <form className="form-size"  onSubmit={console.log("contraseña actuallizada")}>

          <div className='div_form'>
                  <label className="label-form">Nombre:</label>
                  <input className="imput-form"
                     type="text" 
                     placeholder="ingrese su nombre">
                   </input>
                </div>

            <div className='div_form'>
                    <label className="label-form">Email:</label>
                     <input className="imput-form"
                     type="email" 
                     placeholder="ingrese su email">
                   </input>
                </div>

                <div className='div_form'>
                  <label className="label-form">Contraseña:</label>
                 <input className="imput-form" 
                   type="password" 
                   placeholder="ingresar contraseña">
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
                    Crear Usuario
                </button>
                
            </form>
          </div>
           
        </div>
    );
}

export default Register;