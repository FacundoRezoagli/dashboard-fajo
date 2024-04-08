import 'bootstrap/dist/css/bootstrap.min.css';
import './clients.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const fetchData = async () => {
  const response = await fetch("http://localhost:5199/api/clients");
  const data = await response.json();
  return data;
}

export default async function Clients() {
  const dataApi = await fetchData();
  

  const columns: GridColDef[] = [
    { field: 'id', headerName: '#', width: 100 },
    { field: 'firstName', headerName: 'Nombre', width: 200 },
    { field: 'lastName', headerName: 'Apellido', width: 200 },
    { field: 'companyName', headerName: 'Compañía', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'cellPhone', headerName: 'Teléfono', width: 200 }
  ];
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Clientes</h1> 
    <div style={{ height: 900, width: '60%' , margin: 'auto'}}>
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
