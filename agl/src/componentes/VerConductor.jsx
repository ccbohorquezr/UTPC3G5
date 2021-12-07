import React, { useState, useEffect } from "react";
import Axios from "axios";
import MaterialTable from "material-table";

export default function VerConductor() {
  const [listaConductores, setListaConductores] = useState([]);
  const [nombreConductor, setNombreConductor] = useState('');
  const [cedula, setCedula] = useState('');
  const [placaVehiculo, setPlacaVehiculo] = useState('');
  const [telefono, setTelefono] = useState('');

  useEffect(() => {
    obtenerConductores();
  }, []);

  const obtenerConductores = async () => {
    const respuesta = await Axios.get('/listarConductores')
    setListaConductores(respuesta.data)
  }

  const data = listaConductores.map((conductor )=> ({
    nombreConductor: conductor.nombreConductor,
    cedula: conductor.cedula,
    placaVehiculo: conductor.placaVehiculo,
    telefono: conductor.telefono,
  })); 

  return (
    <div className="container">
     
     
       <MaterialTable
        title="Conductores"
        columns={[
          { title: 'id', field: '_id' },
          { title: 'Nombre', field: 'nombreConductor' },
          { title: 'Cedula', field: 'cedula' },
          { title: 'Placa  Vehiculo', field: 'placaVehiculo' },
          { title: 'telefono', field: 'telefono' },
        ]}
        data={data}
        options={{
          exportButton: true,
          search:true,
          actionsColumnIndex:-1,
          initialPage:1
        }}
        actions={[

        {
          icon:'delete',
          tooltip:'Eliminar',
          //onClick: (event,rowData) => eliminar(rowData.id)
        },
        {
          icon:'edit',
          tooltip:'editar',
          //onClick: (event,rowData) => eliminar(rowData.id)
        }

        ]}
      />  
    </div>
  );
}
