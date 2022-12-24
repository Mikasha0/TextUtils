import React from 'react'
import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';

export default function FetchAPI() {
    const {data, isLoading,isError} = useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
    });
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Sorry!! there was an error.</h1>
    }
  return (
    <div>This is the FetchAPI. <p>{data?.fact}</p></div>
  )
}
