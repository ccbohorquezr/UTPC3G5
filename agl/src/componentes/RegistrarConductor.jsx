import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function RegistrarConductor() {
  const [nombreConductor, setNombreConductor] = useState("");
  const [cedula, setCedula] = useState("");
  const [placaVehiculo, setPlacaVehiculo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");

 

  const guardar = async (e) => {
    e.preventDefault();
    const conductor ={
      nombreConductor,
      cedula,
      placaVehiculo,
      telefono,
      contrasena
    }
  if(nombreConductor===""){
    Swal.fire({
      icon:'error',
      title:'Nombre requerido',
      showConfirmButton:false,
      timer:1500
    })
  }
  
  else if(cedula===""){
    Swal.fire({
      icon:'error',
      title:'Cedula requerida',
      showConfirmButton:false,
      timer:1500
    })
  }

  else if(placaVehiculo===""){
    Swal.fire({
      icon:'error',
      title:'placa Vehiculo requerida',
      showConfirmButton:false,
      timer:1500
    })
  }

  else if(telefono===""){
    Swal.fire({
      icon:'error',
      title:'Telefono requerido',
      showConfirmButton:false,
      timer:1500
    })
  }
  else if(contrasena===""){
    Swal.fire({
      icon:'error',
      title:'contraseña requerida',
      showConfirmButton:false,
      timer:1500
    })
  }


  else{
    const token = sessionStorage.getItem('token')
    const respuesta= await Axios.post('/conductor/crearConductor',conductor,{
      headers: {'autorizacion':token}
    })
    const mensaje = respuesta.data.mensaje
    console.log(mensaje)
    Swal.fire({
      icon:'success',
      title:mensaje,
      showConfirmButton:false,
      timer:1500
    })
  e.target.reset()
  setNombreConductor("");
  setCedula("");
  setContrasena("");
  setPlacaVehiculo("");
  setTelefono("");
  }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7  mx-auto">
          <div className="card">
            <div className="container text-center fa-5x"></div>
            <div className="card-header bg-info text-center">
              <h4>Registrar Conductor</h4>
            </div>
            <div className="card-body">
              <form onSubmit={guardar}>
                <div className="row">
                  <div className="col-md-6">
                    <label>Nombre</label>
                    <input type="text" className="form-control required" onChange={(e) => setNombreConductor(e.target.value)}
 />
                  </div>
                  <div className="col-md-6">
                    <label>Cedula</label>
                    <input type="text" className="form-control required" onChange={(e) => setCedula(e.target.value)}
 />
                  </div>
                  <div className="col-md-6">
                    <label>Placa Vehiculo</label>
                    <input type="text" className="form-control required" onChange={(e) => setPlacaVehiculo(e.target.value)}
 />
                  </div>
                  <div className="col-md-6">
                    <label>Telefono</label>
                    <input type="text" className="form-control required" onChange={(e) => setTelefono(e.target.value)}
  />
                  </div>

                  <div className="col-md-6">
                    <label>Contraseña</label>
                    <input type="text" className="form-control required" onChange={(e) => setContrasena(e.target.value)}
 />
                  </div>

                  <div>
                    <br />
                  </div>
                </div>

                <button type="submit" class="btn btn-outline-info" onClick >
                  <span class="fa fa-save"></span> Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
