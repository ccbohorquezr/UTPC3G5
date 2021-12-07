import React from 'react'
import MaterialTable from 'material-table'

export default function VerServicios() {
    return (
        <div className="container">
          <br />
          <MaterialTable
            title="Servicios"
            columns={[
              { title: "Name", field: "name" },
              { title: "Surname", field: "surname" },
              { title: "Birth Year", field: "birthYear", type: "numeric" },
              {
                title: "Birth Place",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
              },
            ]}
            data={[
              { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
              },
            ]}
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