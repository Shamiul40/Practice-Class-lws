import React, { useEffect, useRef, useState } from 'react'

export default function ProductList() {
    const[products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null)
    

    useEffect(()=>{

        const fetchProducts=()=>{
            
        }

        const onIntersection=(items)=>{
            const loaderItems = items[0]
            
            if(loaderItems.isIntersecting && hasMore ) {
                fetchProducts();
            }
        }

        const observer = new IntersectionObserver(onIntersection)

        if(observer && loaderRef.current){
            observer.observe(loaderRef.current)
        }

        //clean up 
        return ()=>{
          if(observer) {
            observer.disconnect();
          }
        }
    })


  return (
    <div>
      <h1>Product List</h1>
      
      <div ref={loaderRef}>Loading more products...</div>
    </div>
  )
}
