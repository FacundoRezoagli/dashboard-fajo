
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './clients.css';
import { useEffect, useState } from "react";
import axios from 'axios';


export default function Clients() {


  const [dataApi, setDataApi] = useState<any>([]);
  useEffect(() => {
    getData();
  }, []);



  const getData = () => {
    try {
      axios.get('http://localhost:5199/api/clients').then((response: any) => {
        setDataApi(response.data);
        console.log(dataApi);
        console.log(response);
      }).catch((error: any) => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }


  }




  return (

    
      <div className="container justify-content-center">
        {
          dataApi && dataApi.length > 0 ? (

              <table className="table">
              <thead>
                <tr>
                  <th scope="col" className='hidden-sm'>#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Compañía</th>
                  <th scope="col" className='hidden-sm'>Email</th>
                  <th scope="col" className='hidden-sm'>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {

                  dataApi.map((client: any, index:number) => (
                    <tr key="index">
                      <th scope="row" className='hidden-sm'>{client.id}</th>
                      <td>{client.firstName}</td>
                      <td>{client.lastName}</td>
                      <td>{client.companyName}</td>
                      <td className='hidden-sm'>{client.email}</td>
                      <td className='hidden-sm'>{client.cellPhone}</td>
                    </tr>
                  ))

                }
              </tbody>
            </table>
              
            
          ) : (
            <div className="d-flex justify-content-center">
              <strong>Cargando...</strong>
            </div>

          )
        }

      </div>

    

  );

}