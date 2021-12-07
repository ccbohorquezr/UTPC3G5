import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function RegistrarServicio() {
 
  const [factura,setFactura]= useState("")
  const [nombreConductor,setNombreConductor]= useState("")
  const [cliente,setCliente]= useState("")
  const [placaVehiculo, setPlacaVehiculo] = useState("");
  const [total, setTotal] = useState("");


  const guardar =async (e) => {
    e.preventDefault();
    const servicio={
      factura,
      nombreConductor,
      cliente,
      placaVehiculo,
      total
    }
    if(factura===""){
      Swal.fire({
        icon:'error',
        title:'Factura requerida',
        showConfirmButton:false,
        timer:1500
      })
    } else if(nombreConductor===""){
      Swal.fire({
        icon:'error',
        title:'nombre Conductor requerido',
        showConfirmButton:false,
        timer:1500
      })
    }else if(cliente===""){
      Swal.fire({
        icon:'error',
        title:'cliente requerido',
        showConfirmButton:false,
        timer:1500
      })
    }else if(placaVehiculo===""){
      Swal.fire({
        icon:'error',
        title:'placa Vehiculo requerida',
        showConfirmButton:false,
        timer:1500
      })
    }else if(total===""){
      Swal.fire({
        icon:'error',
        title:'total requerida',
        showConfirmButton:false,
        timer:1500
      })
    }
    else{
      const token = sessionStorage.getItem('token')
      const respuesta= await Axios.post('/servicio/crearServicio',servicio,{
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
  setFactura("");
  setNombreConductor("");
  setCliente("");
  setPlacaVehiculo("");
  setTotal("");
  }
  }
 
  

    return (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-7  mx-auto">
              <div className="card">
                <div className="container text-center fa-5x">
                 
                </div>
                <div className="card-header bg-info text-center">
               

                  <h4>Registrar Servicio</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={guardar}>
                    <div className="row">
                    <div className="col-md-6">
                        <label>Factura </label>
                        <input type="text" className="form-control required"  onChange={(e)=>setFactura(e.target.value)}/>
                      </div>

                      <div className="col-md-6">
                        <label>Nombre Conductor </label>
                        <input type="text" className="form-control required"  onChange={(e)=>setNombreConductor(e.target.value)} />
                      </div>
                      <div className="col-md-6">
                        <label>Cliente</label>
                        <input type="text" className="form-control required" onChange={(e) => setCliente(e.target.value)}/>
                      </div>
                      <div className="col-md-6">
                        <label>Placa Vehiculo</label>
                        <input type="text" className="form-control required"  onChange={(e)=>setPlacaVehiculo(e.target.value)}/>
                      </div>
                      <div className="col-md-6">
                        <label>Total</label>
                        <input type="text" className="form-control required"  onChange={(e) => setTotal(e.target.value)}/>
                      </div>
                      <div>
                        <br />
                      </div>
                    </div>
    
                    <button type="submit" class="btn btn-outline-info">
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
