import React from "react";

export default function AddPost() {
  return (
    <div>
      <h1 className="text-2xl my-2">Add new Post</h1>
      <form className="space-y-2">
        <input type="text" name="title" className="border"/> <br />
        <input type="text" name="body" className="border" /> <br />
        <button className="bg-gray-300 rounded py-2 px-4">Submit</button>
      </form>
    </div>
  );
}
