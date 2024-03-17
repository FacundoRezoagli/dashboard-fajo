
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";


export default function Home(){
  

  const [dataApi, setDataApi] = useState<any>([]);

  const axios = require("axios").default;

  axios.get('http://localhost:5199/api/clients').then((response:any)=>{
    setDataApi(response);
    console.log(dataApi);
  }).catch((error:any) =>{
    console.log(error);
})

  

  return (
    <div>ctmr</div>
    // <div>
    //   {dataApi && dataApi.length > 0 ? (
    //     dataApi.map((data:any) => (
    //       <strong key={data.id}>{data.id}</strong> // Assuming id is a property in each object
    //     ))
    //   ) : (
    //     <strong>...Loading</strong>
    //   )}
    // </div>
  );

}