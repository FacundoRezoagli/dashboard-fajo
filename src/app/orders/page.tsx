'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './clients.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function Clients() {

  const [dataApi, setDataApi] = useState<any>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios.get('http://localhost:5199/api/orders')
        .then((response: any) => {
          const modifiedData = response.data.map((item: any) => {
            return { 
              ...item,
              creationDate: item.creationDate.split('T')[0], // Obtener solo la fecha
              dueDate: item.dueDate.split('T')[0] // Obtener solo la fecha
            };
          });
          setDataApi(modifiedData);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: '#', width: 100 },
    { field: 'creationDate', headerName: 'Fecha de Creación', width: 200 },
    { field: 'dueDate', headerName: 'Fecha de Vencimiento', width: 200 },
    { field: 'clientId', headerName: 'ID del Cliente', width: 200 },
  ];

  return (
  <div>
    <h1 style={{ textAlign: 'center' }}>Pedidos</h1> 
    <div style={{ height: 900, width: '33%', margin: 'auto' }}>
      <DataGrid
        rows={dataApi}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        pagination
        autoHeight
      />
    </div>
  </div>
  );
}
