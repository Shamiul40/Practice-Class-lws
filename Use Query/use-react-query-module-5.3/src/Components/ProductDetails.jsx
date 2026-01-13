import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const retriveProduct = async()=>{
    const response = await axios.get(`http://localhost:3000/products`)
    return response.data
}

export default function ProductDetails() {

    const{data : product, isLoading, error} = useQuery({
        queryKey : ["products"],
        queryFn : retriveProduct,

    })

   
  return (
    <div>
      
    </div>
  )
}
