
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from 'axios';


export default function Home(){
  

  const [dataApi, setDataApi] = useState<any>([]);
  // const axios = require("axios").default;
  useEffect(() => {
    getData();
  }, []);

  

  const getData = ()=>{
    try{
      axios.get('http://localhost:5199/api/clients').then((response: any) => {
      setDataApi(response.data);
      console.log(dataApi);
      console.log(response);
    }).catch((error: any) => {
      console.log(error);
    })
    } catch(error){
      console.log(error);
    }
    

  }

  
  

  return (
   
    <main>
      <div>
      {dataApi && dataApi.length > 0 ? (
        dataApi.map((data:any) => (
          <strong key={data.id}>{data.id}</strong> // Assuming id is a property in each object
        ))
      ) : (
        <strong>...Loading</strong>
      )}
    </div>
    </main>
    
  );

}