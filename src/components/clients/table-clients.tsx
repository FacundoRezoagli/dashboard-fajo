"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styles from "@/app/clients/clients.module.css"
import { esES } from "@mui/x-data-grid/locales";
import { Client } from "@/types/types";

interface TableClientsProps {
  clientes: Array<Client>
}

export function TableClients({
  clientes
}: TableClientsProps) {

  const columns: GridColDef<Client>[] = [
    { field: 'id', headerName: '#', width: 100 },
    { field: 'firstName', headerName: 'Nombre', width: 200 },
    { field: 'lastName', headerName: 'Apellido', width: 200 },
    { field: 'companyName', headerName: 'Compañía', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'cellPhone', headerName: 'Teléfono', width: 200 },
  ];
  return (
    <div className={styles.table}>
      {/* TODO: Centrar verticalmente la paginación, otros usuarios tienen el mismo error */}
      <DataGrid
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={clientes}
        columns={columns}
        pageSizeOptions={[10, 50, 100]}
        pagination
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </div>
  )
}