import React, { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(title, body)
  }


  return (
    <div>
      <h1 className="text-2xl my-2">Add new Post</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} className="border" />{" "}
        <br />
        <input type="text" name="body" value={body} onChange={(e)=>setBody(e.target.value)} className="border" /> <br />
        <button type="submit" className="bg-gray-300 rounded py-2 px-4">Submit</button>
      </form>
    </div>
  );
}
