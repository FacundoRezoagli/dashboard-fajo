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
      axios.get('http://localhost:5199/api/products')
        .then((response: any) => {
          setDataApi(response.data);
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
    { field: 'name', headerName: 'Nombre', width: 300 }, // Modificado para adaptarse a la API de productos
    { field: 'price', headerName: 'Precio', width: 200 }, // Modificado para adaptarse a la API de productos
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Productos</h1> 
    <div style={{ height: 900, width: '25%' , margin: 'auto'}}>
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
