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

   if(isLoading) return <div>data fetching...</div>
   if(error) return <div>data not found ${error.message}</div>
  return (
     <div className='w-1/5'>
        <h1 className="text-3xl my-2">Product Details</h1>
        <div className='border bg-gray-100 p-1 text-md rounded flex flex-col'>
            <img
                src={product.thumbnail}
                alt={product.title}
                className="object-cover h-24 w-24 border rounded-full m-auto" />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>USD {product.price}</p>
            <p>{product.rating}/5</p>
        </div>
    </div>
  )
}
