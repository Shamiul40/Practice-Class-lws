import React, { useState } from 'react'

export default function AddProduct() {
    const [state, setState] = useState({
        title : "",
        description : "",
        price : "",
        thumbnail : "",

    })

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.type === "number" ? e.target.valueAsNumber : e.target.value;
        console.log(e.target)
        setState({
            ...state,
            [name] : value
        })

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(state)
    }


  return (
    <div>
      <h1>add product</h1>

      <form className="flex flex-col" onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={state.title}
                    name="title"
                    onChange={handleChange}
                    className="my-2 border p-2 rounded"
                    placeholder="Enter a product title"
                />
                <textarea
                    value={state.description}
                    name="description"
                    onChange={handleChange}
                    className="my-2 border p-2 rounded"
                    placeholder="Enter a product description"
                />

                <input
                    type="number"
                    value={state.price}
                    name="price"
                    onChange={handleChange}
                    className="my-2 border p-2 rounded"
                    placeholder="Enter a product price"
                />
                <input
                    type="text"
                    value={state.thumbnail}
                    name="thumbnail"
                    onChange={handleChange}
                    className="my-2 border p-2 rounded"
                    placeholder="Enter a product thumbnail URL"
                />

                <button
                    type="submit"
                    className="bg-black m-auto text-white text-xl p-1 rounded-md"
                >
                    Add
                </button>
            </form>
    </div>
  )
}
