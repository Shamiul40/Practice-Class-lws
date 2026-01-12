import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const retiveProduct = async () => {
  const response = await axios.get(`http://localhost:3000/products`);
  return response.data;
};

export default function Productlist() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retiveProduct,
  });
  console.log(products);

  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <div>an error occurred : {error.message}</div>;

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h1 className="text-3xl my-2">Productlist</h1>

      <ul className="flex flex-col justify-center items-center flex-wrap w-3/5">
        {products &&
          products.map((product) => (
            <li
              className="flex flex-col items-center m-2 border rounded-sm"
              key={product.id}
            >
                <img className="object-cover h-64 w-96 rounded-sm " src={product.thumbnail} alt="image" />
              <p>{product.title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
