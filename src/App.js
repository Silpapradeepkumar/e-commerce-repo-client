import React, {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const url="http://localhost:8000/product/get/";
  const [data,setData]=useState([]);
  const fetchData=async()=>{
    let res = await axios.get(`${url}`);
    console.log(res.data);
    setData(res.data);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div>
      {
        data.map((dataObj,index)=>{
          return(
            <>
            <p>{dataObj.name}</p>
            <p>{dataObj.rate}</p>
            <p>{dataObj.description}</p>
           
            </>
          )
        })
      }
    </div>
  )
}

export default App





